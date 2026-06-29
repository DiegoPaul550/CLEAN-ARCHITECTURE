import { ProductRepository } from "../../domain/repositories/IProduct";
import { CustomerRepository } from "../../domain/repositories/ICustomer";
import { SaleRepository } from "../../domain/repositories/ISale";
import { Sale } from "../../domain/entities/Sale";

export class RegisterSale {

    constructor(
        private productRepository: ProductRepository,
        private customerRepository: CustomerRepository,
        private saleRepository: SaleRepository
    ) {}

    execute(saleId: number, customerId: number, productId: number, quantity: number): void {

        const customer = this.customerRepository.findById(customerId);

        const product = this.productRepository.findById(productId);

        if (!customer) {
            throw new Error("Cliente no encontrado");
        }

        if (!product) {
            throw new Error("Producto no encontrado");
        }

        const sale = new Sale( saleId, customer, product, quantity);

        this.productRepository.update(product);

        this.saleRepository.save(sale);
    }
}