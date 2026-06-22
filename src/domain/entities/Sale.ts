import { Customer } from "./Customer";
import { Product } from "./Product";

export class Sale {
    private id: number;
    private customer: Customer;
    private product: Product;
    private quantity: number;
    private total: number;

    constructor(id:number, customer:Customer, product:Product, quantity:number) {
        this.id = id;
        this.customer = customer;
        this.product = product;
        this.quantity = quantity;

        if (quantity <= 0) {
            throw new Error("Cantidad inválida");
        }

        product.sell(quantity);

        this.total =
            product.getPrice() * quantity;
    }

    getId(): number {
        return this.id;
    }

    getCustomer(): Customer {
        return this.customer;
    }

    getProduct(): Product {
        return this.product;
    }

    getQuantity(): number {
        return this.quantity;
    }

    getTotal(): number {
        return this.total;
    }
}