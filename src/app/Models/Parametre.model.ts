export class Parametre {
    private _nom:string;
    private _prix: string;
    private _description: string;


    get nom(): string {
        return this._nom;
    }

    set nom(value: string) {
        this._nom = value;
    }

    get prix(): string {
        return this._prix;
    }

    set prix(value: string) {
        this._prix = value;
    }

    get description(): string {
        return this._description;
    }

    set description(value: string) {
        this._description = value;
    }

    constructor() {
    }
}
