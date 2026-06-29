import { SaleRepository } from "../../domain/repositories/ISale";

export class GetSales {

    constructor(
        private repository: SaleRepository
    ) {}

    execute() {
        return this.repository.findAll();
    }
}