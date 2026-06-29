import { ProductRepositoryMemory } from "./infrastructure/repositories/ProductRepositoryMemory";
import { CustomerRepositoryMemory } from "./infrastructure/repositories/CustomerRepositoryMemory";
import { SaleRepositoryMemory } from "./infrastructure/repositories/SaleRepositoryMemory";

import { CreateProduct } from "./application/use-cases/CreateProduct";
import { CreateCustomer } from "./application/use-cases/CreateCustomer";
import { RegisterSale } from "./application/use-cases/RegisterSale";
import { GetSales } from "./application/use-cases/GetSales";

// Importamos nuestra nueva capa de presentación
import { ConsoleView } from "./presentation/ConsoleView";

// 1. Inicialización de infraestructura
const productRepository = new ProductRepositoryMemory();
const customerRepository = new CustomerRepositoryMemory();
const saleRepository = new SaleRepositoryMemory();

// 2. Inicialización de casos de uso
const createProduct = new CreateProduct(productRepository);
const createCustomer = new CreateCustomer(customerRepository);
const registerSale = new RegisterSale(productRepository, customerRepository, saleRepository);
const getSales = new GetSales(saleRepository);

// 3. Inicialización de la vista
const view = new ConsoleView();

// 4. Ejecución del flujo
createProduct.execute(1, "Laptop", 800, 10);
createProduct.execute(2, "Mouse", 25, 20);
createCustomer.execute(1, "Diego");

registerSale.execute(1, 1, 1, 2);
view.showMessage("Venta procesada con éxito.");

// Obtenemos los datos limpios de la aplicación y se los pasamos a la vista
const salesList = getSales.execute();
view.renderSales(salesList);
