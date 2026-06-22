import { SaleRepository } from "../../domain/repositories/SaleRepository";

export class GetSales {

    constructor(
        private repository: SaleRepository
    ) {}

    execute() {
        return this.repository.findAll();
    }
}