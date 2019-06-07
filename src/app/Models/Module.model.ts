export class Module {
    private _nom:string;
    private _prix: string;
    private _image: string;
    private _description: string;
    private _etat: string;


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

    get image(): string {
        return this._image;
    }

    set image(value: string) {
        this._image = value;
    }

    get description(): string {
        return this._description;
    }

    set description(value: string) {
        this._description = value;
    }

    get etat(): string {
        return this._etat;
    }

    set etat(value: string) {
        this._etat = value;
    }

    constructor() {
    }
}
