import { Sale } from "../../domain/entities/Sale";
import { SaleRepository } from "../../domain/repositories/ISale";

export class SaleRepositoryMemory
implements SaleRepository {

    private sales: Sale[] = [];

    save(sale: Sale): void {
        this.sales.push(sale);
    }

    findAll(): Sale[] {
        return this.sales;
    }
}