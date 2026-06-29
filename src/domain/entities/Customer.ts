export class Customer {
    
    // 1. ATRIBUTOS (PROPIEDADES PRIVADAS)

    // Se definen como 'private' para aplicar Encapsulamiento.
    // Esto evita que agentes externos modifiquen el estado del cliente sin pasar 
    // por las reglas del negocio.
    
    private id: number;
    private name: string;


    // Recibe los datos necesarios para dar vida a la entidad y asegura que nazca en un estado válido.
    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;

        // REGLA DE NEGOCIO
        // Evalúa si el nombre viene vacío o solo contiene espacios en blanco.
        if (!name.trim()) {
            // Lanza una excepción inmediatamente si los datos de entrada rompen las reglas del negocio.
            throw new Error("Nombre inválido");
        }
    }

    // 3. MÉTODOS DE ACCESO (GETTERS)

    // Al ser las propiedades privadas, estos métodos públicos permiten que otras capas 
    // (como Aplicación o Presentación) puedan leer la información de forma segura.

    //Retorna el identificador único del cliente.

    getId(): number {
        return this.id;
    }

    // Retorna el nombre validado del cliente.

    getName(): string {
        return this.name;
    }
}
