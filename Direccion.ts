export class Direccion{
    private _calle: string;
    private _numero: string;
    private _letra: string;
    private _codigoPostal: string;
    private _poblacion: string;
    private _provincia: string;

    
    constructor(calle:string, numero:string, piso:string, letra:string,
    codigoPostal:string, poblacion:string, provincia:string){
        this._calle = calle;
        this._numero = numero;
        this._piso = piso;
        this._letra = letra;
        this._codigoPostal = codigoPostal;
        this._poblacion = poblacion;
        this._provincia = provincia;
    }

    public get calle(): string {
        return this._calle;
    }

    public set calle(value: string) {
        this._calle = value;
    }

    public get numero(): string {
        return this._numero;
    }
    
    public set numero(value: string) {
        this._numero = value;
    }

    private _piso: string;
    public get piso(): string {
        return this._piso;
    }

    public set piso(value: string) {
        this._piso = value;
    }

    public get letra(): string {
        return this._letra;
    }
    public set letra(value: string) {
        this._letra = value;
    }

    public get codigoPostal(): string {
        return this._codigoPostal;
    }

    public set codigoPostal(value: string) {
        this._codigoPostal = value;
    }

    public get poblacion(): string {
        return this._poblacion;
    }

    public set poblacion(value: string) {
        this._poblacion = value;
    }

    public get provincia(): string {
        return this._provincia;
    }

    public set provincia(value: string) {
        this._provincia = value;
    }
}