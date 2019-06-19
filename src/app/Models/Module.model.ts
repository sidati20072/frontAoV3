export class Module {
    private _id: string;
    private _nom:string;
    private _prix: number;
    private _image: string;
    private _description: string;
    private _etat: string;


    get id(): string {
        return this._id;
    }

    set id(value: string) {
        this._id = value;
    }

    get nom(): string {
        return this._nom;
    }

    set nom(value: string) {
        this._nom = value;
    }

    get prix(): number {
        return this._prix;
    }

    set prix(value: number) {
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
