import { Customer } from "../entities/Customer";

 // En Clean Architecture, el Dominio define CÓMO quiere que se guarden y recuperen 
 // sus datos mediante una interfaz (contrato), pero no le importa la tecnología real.
 // La implementación real se hará en la capa de Infraestructura.

export interface CustomerRepository {

    // Guarda o actualiza un cliente en el sistema de almacenamiento.
    save(customer: Customer): void;

    // Busca un cliente específico utilizando su identificador único.
    findById(id: number): Customer | undefined;

    // Recupera la lista completa de todos los clientes registrados.

    findAll(): Customer[];
}
