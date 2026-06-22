import { ProductRepositoryMemory } from "../infrastructure/repositories/ProductRepositoryMemory";

import { CustomerRepositoryMemory } from "../infrastructure/repositories/CustomerRepositoryMemory";

import { SaleRepositoryMemory } from "../infrastructure/repositories/SaleRepositoryMemory";

import { CreateProduct } from "../application/use-cases/CreateProduct";

import { CreateCustomer } from "../application/use-cases/CreateCustomer";

import { RegisterSale } from "../application/use-cases/RegisterSale";

import { GetSales } from "../application/use-cases/GetSales";

const productRepository = new ProductRepositoryMemory();

const customerRepository = new CustomerRepositoryMemory();

const saleRepository = new SaleRepositoryMemory();

const createProduct = new CreateProduct(productRepository);

const createCustomer = new CreateCustomer(customerRepository);

const registerSale = new RegisterSale( productRepository, customerRepository,saleRepository);

const getSales = new GetSales(saleRepository);

// Productos

createProduct.execute(1, "Laptop", 800, 10);

createProduct.execute(2, "Mouse" , 25 ,20);

// Clientes

createCustomer.execute(1, "Diego");

// Venta

registerSale.execute(1, 1, 1, 2);

// Mostrar ventas

console.log("\nVENTAS\n");

getSales.execute().forEach(sale => {

    console.log(
        `Venta #${sale.getId()}`
    );

    console.log(
        `Cliente: ${sale.getCustomer().getName()}`
    );

    console.log(
        `Producto: ${sale.getProduct().getName()}`
    );

    console.log(
        `Cantidad: ${sale.getQuantity()}`
    );

    console.log(
        `Total: $${sale.getTotal()}`
    );

    console.log("-------------------");
});