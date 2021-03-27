export class Telefono {
    
    private _tipo: string;
    private _numero: string;

    constructor(tipo:string, numero:string){
        this._tipo = tipo;
        this._numero = numero;
    }

    public get tipo(): string {
        return this._tipo;
    }
    
    public set tipo(value: string) {
        this._tipo = value;
    }

    public get numero(): string {
        return this._numero;
    }
    public set numero(value: string) {
        this._numero = value;
    }

}