export class Entreprise {

    private _id: number;
    private _nom: string;
    private _address: string;
    private _logo: string;
    constructor() {}


    get id(): number {
        return this._id;
    }

    get nom(): string {
        return this._nom;
    }

    set nom(value: string) {
        this._nom = value;
    }

    get address(): string {
        return this._address;
    }

    set address(value: string) {
        this._address = value;
    }

    get logo(): string {
        return this._logo;
    }

    set logo(value: string) {
        this._logo = value;
    }
}
