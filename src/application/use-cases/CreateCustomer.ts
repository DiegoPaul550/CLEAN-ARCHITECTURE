import { Customer } from "../../domain/entities/Customer";
import { CustomerRepository } from "../../domain/repositories/ICustomer";

export class CreateCustomer {

    constructor(
        private repository: CustomerRepository
    ) {}

    execute(id: number, name: string): void {

        const customer = new Customer(id, name);
        
        this.repository.save(customer);
    }
}