import { SaleRepository } from "../../domain/repositories/ISale";
import { Sale } from "../../domain/entities/Sale";

// Modela la acción de listar o consultar el histórico de transacciones del negocio.
export class GetSales {

    // Inyección de Dependencias.
    // Recibe de forma abstracta el repositorio que maneja las ventas.

    constructor(
        private repository: SaleRepository
    ) {}

    // Ejecuta la consulta de las ventas.

    execute(): Sale[] {
        // Solicita al repositorio contratado que extraiga todas las ventas almacenadas.
        // La capa de aplicación no sabe de dónde vienen (memoria, base de datos, etc.),
        // solo confía en que el repositorio le devolverá las entidades correspondientes.
        return this.repository.findAll();
    }
}
