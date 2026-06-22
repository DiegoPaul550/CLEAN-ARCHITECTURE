import { Product } from "../../domain/entities/Product";
import { ProductRepository } from "../../domain/repositories/ProductRepository";

export class ProductRepositoryMemory
implements ProductRepository {

    private products: Product[] = [];

    save(product: Product): void {
        this.products.push(product);
    }

    findById(id: number): Product | undefined {

        return this.products.find(
            p => p.getId() === id
        );
    }

    findAll(): Product[] {
        return this.products;
    }

    update(product: Product): void {

        const index =
            this.products.findIndex(
                p => p.getId() === product.getId()
            );

        this.products[index] = product;
    }
}