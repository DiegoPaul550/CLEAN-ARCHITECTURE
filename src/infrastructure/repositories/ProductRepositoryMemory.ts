import { Product } from "../../domain/entities/Product";
import { ProductRepository } from "../../domain/repositories/IProduct";

// Implementación concreta en memoria para los productos.
export class ProductRepositoryMemory implements ProductRepository {

    // 1. ALMACENAMIENTO EN MEMORIA
    // Arreglo que actúa como nuestra tabla de productos.
    private products: Product[] = [];

    // 2. MÉTODOS DE ESCRITURA Y LECTURA
    //Añade un nuevo producto al catálogo en memoria.
    save(product: Product): void {
        this.products.push(product);
    }

    // Busca un producto por su ID. Retorna la entidad viva si existe, o 'undefined'.
    findById(id: number): Product | undefined {
        return this.products.find(
            p => p.getId() === id
        );
    }

    // Retorna el catálogo completo de productos.
    
    findAll(): Product[] {
        return this.products;
    }

    // Reemplaza un producto existente por su versión más actualizada.
    // Es fundamental para guardar los nuevos valores de stock calculados en el Dominio.
    update(product: Product): void {

        // 1. Busca la posición donde se encuentra el producto original dentro del arreglo.
        // Utiliza el identificador único para hacer la comparación.
        const index = this.products.findIndex(
            p => p.getId() === product.getId()
        );

        // 2. Sobreescribe la posición exacta del arreglo con la nueva instancia de la entidad.
        // Esto guarda de forma definitiva los cambios físicos (como la reducción de inventario).
        this.products[index] = product;
    }
}
