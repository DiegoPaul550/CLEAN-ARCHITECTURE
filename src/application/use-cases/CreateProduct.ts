import { Product } from "../../domain/entities/Product";
import { ProductRepository } from "../../domain/repositories/IProduct";

export class CreateProduct {

    constructor(
        private repository: ProductRepository
    ) {}

    execute(id: number, name: string, price: number, stock: number): void {

        const product = new Product(id, name, price, stock);

        this.repository.save(product);
    }
}