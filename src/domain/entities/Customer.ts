export class Customer {
    private id: number;
    private name: string;

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;

        if (!name.trim()) {
            throw new Error("Nombre inválido");
        }
    }

    getId(): number {
        return this.id;
    }

    getName(): string {
        return this.name;
    }
}