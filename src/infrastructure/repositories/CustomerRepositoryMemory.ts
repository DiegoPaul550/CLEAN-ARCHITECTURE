import { Customer } from "../../domain/entities/Customer";
import { CustomerRepository } from "../../domain/repositories/CustomerRepository";

export class CustomerRepositoryMemory
implements CustomerRepository {

    private customers: Customer[] = [];

    save(customer: Customer): void {
        this.customers.push(customer);
    }

    findById(id: number): Customer | undefined {

        return this.customers.find(
            c => c.getId() === id
        );
    }

    findAll(): Customer[] {
        return this.customers;
    }
}