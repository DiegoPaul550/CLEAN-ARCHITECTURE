import { ProductRepository } from "../../domain/repositories/IProduct";
import { CustomerRepository } from "../../domain/repositories/ICustomer";
import { SaleRepository } from "../../domain/repositories/ISale";
import { Sale } from "../../domain/entities/Sale";

// Es la pieza central del sistema. Se encarga de coordinar la lógica de negocio
// que ocurre cuando se realiza una transacción comercial: verifica identidades,
// asocia las entidades correspondientes y sincroniza la persistencia.

export class RegisterSale {

    // Inyección Múltiple de Dependencias a través del constructor.
    constructor(
        private productRepository: ProductRepository,
        private customerRepository: CustomerRepository,
        private saleRepository: SaleRepository
    ) {}

    // Ejecuta el flujo transaccional de la venta basándose en IDs y cantidades.

    execute(saleId: number, customerId: number, productId: number, quantity: number): void {

        // 1. RECUPERACIÓN DE ENTIDADES
        // Busca en los almacenes correspondientes si cliente o producto involucrados existen realmente.
        const customer = this.customerRepository.findById(customerId);
        const product = this.productRepository.findById(productId);

        // 2. VALIDACIONES DE CONTROL DE FLUJO
        // Detiene inmediatamente la operación si el cliente o el producto no están registrados.
        if (!customer) {
            throw new Error("Cliente no encontrado");
        }

        if (!product) {
            throw new Error("Producto no encontrado");
        }

        // 3. CREACIÓN DEL AGREGADO Y EJECUCIÓN DE REGLAS DE NEGOCIO
        // Instancia la nueva venta pasándole los objetos completos del cliente y el producto.
        // Internamente, el constructor de 'Sale' ordenará a 'product.sell(quantity)' reducir su stock.
        // Si el producto no tiene suficiente stock, la entidad misma arrojará un error aquí.
        const sale = new Sale(saleId, customer, product, quantity);

        // 4. SINCRONIZACIÓN Y PERSISTENCIA (EFECTO DOMINÓ)
        // Ya que la venta modificó con éxito el estado del objeto 'product' en memoria (redujo el stock),
        // guardamos/actualizamos el nuevo estado del producto en el inventario.
        this.productRepository.update(product);

        // Finalmente, almacenamos el registro histórico e inmutable de la venta finalizada.
        this.saleRepository.save(sale);
    }
}
