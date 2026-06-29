// Importamos la entidad o el tipo de datos necesario para el tipado
import { Sale } from "../domain/entities/Sale";

export class ConsoleView {
    /**
     * Se encarga de pintar la lista de ventas en la consola con un formato limpio.
     */
    public renderSales(sales: Sale[]): void {
        console.log("\n====================");
        console.log("   REPORTE DE VENTAS ");
        console.log("====================\n");

        if (sales.length === 0) {
            console.log(" No hay ventas registradas en el sistema.");
            console.log("---------------------------------------");
            return;
        }

        sales.forEach(sale => {
            console.log(` Venta ID:   #${sale.getId()}`);
            console.log(` Cliente:    ${sale.getCustomer().getName()}`);
            console.log(` Producto:   ${sale.getProduct().getName()}`);
            console.log(` Cantidad:   ${sale.getQuantity()}`);
            console.log(` Total:      $${sale.getTotal()}`);
            console.log("---------------------------------------");
        });
    }

    /**
     * Opcional: Puedes agregar métodos para mostrar mensajes de éxito o error
     */
    public showMessage(message: string): void {
        console.log(`[INFO] ${message}`);
    }
}
