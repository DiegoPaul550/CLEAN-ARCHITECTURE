export class Product {
    private id: number;
    private name: string;
    private price: number;
    private stock: number;


    constructor( id: number, name: string, price: number, stock: number) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.stock = stock;

        if (price <= 0) {
            throw new Error("El precio debe ser mayor a 0");
        }

        if (stock < 0) {
            throw new Error("El stock no puede ser negativo");
        }
    }

    sell(quantity: number): void {

        if (quantity <= 0) {
            throw new Error("Cantidad inválida");
        }

        if (quantity > this.stock) {
            throw new Error("Stock insuficiente");
        }

        this.stock -= quantity;
    }

    getId(): number {
        return this.id;
    }

    getName(): string {
        return this.name;
    }

    getPrice(): number {
        return this.price;
    }

    getStock(): number {
        return this.stock;
    }
}