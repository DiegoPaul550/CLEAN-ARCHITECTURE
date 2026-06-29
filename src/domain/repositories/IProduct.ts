import { Product } from "../entities/Product";

// Define de forma abstracta las operaciones de lectura y escritura necesarias
// para el ciclo de vida de un producto, aislando por completo la lógica de negocio
// de los detalles de la base de datos.

export interface ProductRepository {

    // Almacena un nuevo producto en el sistema por primera vez.
    save(product: Product): void;

    // Busca un producto específico utilizando su identificador único.
  
    findById(id: number): Product | undefined;

    // Obtiene el catálogo completo de productos registrados en el sistema.
    findAll(): Product[];

    // Actualiza el estado de un producto existente (por ejemplo, tras modificar su stock o precio).

    update(product: Product): void;
}
