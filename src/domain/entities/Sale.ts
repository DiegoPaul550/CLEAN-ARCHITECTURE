import { Customer } from "./Customer";
import { Product } from "./Product";

export class Sale {
    // 1. ATRIBUTOS PRIVADOS (ESTADO DE LA VENTA)
    private id: number;
    private customer: Customer; // Relación directa con la entidad Cliente
    private product: Product;   // Relación directa con la entidad Producto
    private quantity: number;
    private total: number;      // El total se calcula internamente, no se puede forzar externamente

    // 2. CONSTRUCTOR Y ORQUESTACIÓN DE REGLAS

    // Recibe los objetos completos (entidades) del cliente y del producto, garantizando
    // que una venta no se pueda crear con datos inválidos.
    constructor(id: number, customer: Customer, product: Product, quantity: number) {
        this.id = id;
        this.customer = customer;
        this.product = product;
        this.quantity = quantity;

        // REGLA DE NEGOCIO: VALIDACIÓN DE CANTIDAD
        // Impide registrar una venta que no mueva unidades físicas de inventario.
        if (quantity <= 0) {
            throw new Error("Cantidad inválida");
        }

        // REGLA DE NEGOCIO CRÍTICA: REDUCCIÓN DE STOCK
        // La venta le ordena a la entidad producto que descuente su propio inventario.
        // Si el producto no tiene stock suficiente, su método .sell() lanzará un error
        // y detendrá la creación de esta venta automáticamente.
        product.sell(quantity);

        // CÁLCULO AUTOMÁTICO DE ESTADO
        // El precio final se calcula basándose en la verdad del dominio (el precio del producto).
        // Evita que agentes externos inyecten un total erróneo o malintencionado.
        this.total = product.getPrice() * quantity;
    }

    // 3. MÉTODOS DE ACCESO (GETTERS)
  
    // Retorna el identificador de la transacción.
    getId(): number {
        return this.id;
    }

    // Retorna la entidad del cliente que realizó la compra.
    getCustomer(): Customer {
        return this.customer;
    }

    // Retorna la entidad del producto que fue adquirido.
    getProduct(): Product {
        return this.product;
    }

    // Retorna la cantidad exacta de unidades vendidas.
    getQuantity(): number {
        return this.quantity;
    }

    // Retorna el monto total calculado de la venta.
    getTotal(): number {
        return this.total;
    }
}
