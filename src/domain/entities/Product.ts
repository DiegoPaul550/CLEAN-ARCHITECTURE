export class Product {

    // 1. ATRIBUTOS PRIVADOS (ENCAPSULAMIENTO)

    // Protegemos el estado interno para que el precio o el stock no puedan 
    // ser modificados directamente desde fuera sin validar las reglas de negocio.
    private id: number;
    private name: string;
    private price: number;
    private stock: number;

    // 2. CONSTRUCTOR (VALIDACIÓN DE CREACIÓN)

    // Garantiza que no se puedan crear productos con precios o inventarios inválidos.
    constructor(id: number, name: string, price: number, stock: number) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.stock = stock;

        // --- REGLA DE NEGOCIO: VALIDACIÓN DE PRECIO ---
        if (price <= 0) {
            throw new Error("El precio debe ser mayor a 0");
        }

        // --- REGLA DE NEGOCIO: VALIDACIÓN DE INVENTARIO INICIAL ---
        if (stock < 0) {
            throw new Error("El stock no puede ser negativo");
        }
    }

    // 3. MÉTODOS DE COMPORTAMIENTO (LÓGICA DE NEGOCIO)
    

    // Modifica el stock del producto simulando una venta.
    // quantity Cantidad de unidades que se van a vender

    sell(quantity: number): void {
        // --- REGLA DE NEGOCIO: VALIDACIÓN DE OPERACIÓN ---
        // Evita que se procesen ventas de 0 o cantidades negativas.
        if (quantity <= 0) {
            throw new Error("Cantidad inválida");
        }

        //  REGLA DE NEGOCIO: CONTROL DE INVENTARIO
        // Protege al sistema de quedar con stock negativo (inconsistencia).
        if (quantity > this.stock) {
            throw new Error("Stock insuficiente");
        }

        // Si todas las reglas se cumplen, se actualiza el estado interno de forma segura.
        this.stock -= quantity;
    }

    // 4. MÉTODOS DE ACCESO (GETTERS)
    // Acceso a propiedades privadas: Permiten leer valores de variables 
    // marcadas como private o protected desde fuera de la clase sin 
    // exponerlas directamente.

    /** Retorna el identificador único del producto. */
    getId(): number {
        return this.id;
    }

    // Retorna el nombre comercial del producto
    getName(): string {
        return this.name;
    }

    /** Retorna el precio unitario actual. */
    getPrice(): number {
        return this.price;
    }

    // Retorna el inventario disponible en tiempo real.
    getStock(): number {
        return this.stock;
    }
}
