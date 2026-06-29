import { Customer } from "../../domain/entities/Customer";
import { CustomerRepository } from "../../domain/repositories/ICustomer";

// Representa una acción o intención específica del usuario en el sistema. 

export class CreateCustomer {

    // Inyección de Dependencias a través del constructor.

    constructor(
        private repository: CustomerRepository
    ) {}

    // Ejecuta la lógica del caso de uso.
    
    execute(id: number, name: string): void {

        // Si el 'name' viene vacío, la propia entidad lanzará un error que detendrá la ejecución aquí mismo.
        const customer = new Customer(id, name);
        
        // Una vez que el objeto de dominio es válido, se lo envía al repositorio para que lo salve.
        this.repository.save(customer);
    }
}
