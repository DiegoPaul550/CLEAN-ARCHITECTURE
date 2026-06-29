import { Customer } from "../../domain/entities/Customer";
import { CustomerRepository } from "../../domain/repositories/ICustomer";

// Es la implementación concreta del contrato 'CustomerRepository'.
// Al usar la palabra clave 'implements', TypeScript te obliga a escribir exactamente
// los mismos métodos que definiste en la interfaz del Dominio.

export class CustomerRepositoryMemory implements CustomerRepository {

   
    // 1. ALMACENAMIENTO VOLÁTIL (EN MEMORIA)

    // Un arreglo privado que simula ser nuestra base de datos.
    // Al ser privado, nadie fuera de esta clase puede manipular directamente la lista.
    private customers: Customer[] = [];

    // 2. IMPLEMENTACIÓN DE MÉTODOS DEL CONTRATO

    // Inserta un nuevo cliente en el arreglo de memoria.
    // En una app real, aquí usarías comandos como 'INSERT INTO' de SQL o 'db.collection.insertOne()' de MongoDB.
    save(customer: Customer): void {
        this.customers.push(customer);
    }

    // Busca un cliente en el arreglo usando su identificador único.
    // Utiliza la función nativa '.find()' de TypeScript. Si no lo encuentra, automáticamente devuelve 'undefined'.
    findById(id: number): Customer | undefined {
        return this.customers.find(
            c => c.getId() === id
        );
    }

    // Retorna la referencia directa al arreglo con todos los clientes.
    findAll(): Customer[] {
        return this.customers;
    }
}
