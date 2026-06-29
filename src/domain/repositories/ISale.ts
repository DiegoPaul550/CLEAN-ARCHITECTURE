import { Sale } from "../entities/Sale";

// Define las operaciones abstractas para almacenar las transacciones completadas 
// y recuperar el historial de ventas. Al igual que los demás repositorios, actúa como 
// un puerto (Port) que aislará al sistema de la tecnología de persistencia elegida.

export interface SaleRepository {

    // Guarda de forma definitiva una venta procesada en el sistema de almacenamiento.

    save(sale: Sale): void;

    // Recupera el histórico de todas las transacciones de venta realizadas.
 
    findAll(): Sale[];
}
