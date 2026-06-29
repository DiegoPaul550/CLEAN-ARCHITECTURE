import { Sale } from "../../domain/entities/Sale";
import { SaleRepository } from "../../domain/repositories/ISale";

// Implementación concreta en memoria para el registro histórico de transacciones.
// Ofrece la infraestructura mínima necesaria para persistir y auditar las ventas.
export class SaleRepositoryMemory implements SaleRepository {

    // Un arreglo privado que almacena los registros de todas las ventas procesadas.
    private sales: Sale[] = [];

    // Añade de forma definitiva un registro de venta al historial.
    save(sale: Sale): void {
        this.sales.push(sale);
    }

    // Recupera la lista completa de todas las transacciones históricas realizadas.
    findAll(): Sale[] {
        return this.sales;
    }
}
