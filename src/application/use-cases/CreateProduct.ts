import { Product } from "../../domain/entities/Product";
import { ProductRepository } from "../../domain/repositories/IProduct";
 
export class CreateProduct {

    // Inyección de Dependencias.
    // Mantiene el caso de uso 100% aislado de tecnologías como SQL, NoSQL o memoria.

    constructor(
        private repository: ProductRepository
    ) {}

    // Ejecuta el flujo para registrar el producto.

    execute(id: number, name: string, price: number, stock: number): void {

        // Instanciación y Validación:
        // Crea la entidad 'Product'. El constructor de la entidad validará automáticamente
        // si el precio es mayor a 0 y si el stock no es negativo. Si falla, el flujo se corta aquí.
        const product = new Product(id, name, price, stock);

        // Persistencia:
        // Envía la entidad completamente válida al repositorio para que sea almacenada de forma definitiva.
        this.repository.save(product);
    }
}
