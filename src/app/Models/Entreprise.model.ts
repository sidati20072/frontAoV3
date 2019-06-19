import {Module} from './Module.model';

export class Entreprise {

    private _id: number;
    private _nom: string;
    private _address: string;
    private _logo: string;
    private _tel: string;
    private _email: string;
    private _secteur: string;
    private _modules: Module[];
    constructor() {}


    get modules(): Module[] {
        return this._modules;
    }

    set modules(value: Module[]) {
        this._modules = value;
    }

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

    get tel(): string {
        return this._tel;
    }

    set tel(value: string) {
        this._tel = value;
    }

    get email(): string {
        return this._email;
    }

    set email(value: string) {
        this._email = value;
    }

    get secteur(): string {
        return this._secteur;
    }

    set secteur(value: string) {
        this._secteur = value;
    }
}
