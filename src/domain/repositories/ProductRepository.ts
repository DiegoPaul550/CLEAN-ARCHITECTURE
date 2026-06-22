import { Product } from "../entities/Product";

export interface ProductRepository {

    save(product: Product): void;

    findById(id: number): Product | undefined;

    findAll(): Product[];

    update(product: Product): void;
}