import { Customer } from "../entities/Customer";

export interface CustomerRepository {

    save(customer: Customer): void;

    findById(id: number): Customer | undefined;

    findAll(): Customer[];
}