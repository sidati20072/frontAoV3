import {Entreprise} from './Entreprise.model';

export class User {
    private _id: number;
    private _username: string;
    private _password: string;
    private _email: string;
    private _nom: string;
    private _prenom: string;
    private _civilite: string;
    private _fonction: string;
    private _tel: string;
    private _role: string[];
    private _entreprise: Entreprise;

    constructor() {}


    get username(): string {
        return this._username;
    }

    set username(value: string) {
        this._username = value;
    }

    get password(): string {
        return this._password;
    }

    set password(value: string) {
        this._password = value;
    }

    get email(): string {
        return this._email;
    }

    set email(value: string) {
        this._email = value;
    }

    get nom(): string {
        return this._nom;
    }

    set nom(value: string) {
        this._nom = value;
    }

    get prenom(): string {
        return this._prenom;
    }

    set prenom(value: string) {
        this._prenom = value;
    }

    get civilite(): string {
        return this._civilite;
    }

    set civilite(value: string) {
        this._civilite = value;
    }

    get fonction(): string {
        return this._fonction;
    }

    set fonction(value: string) {
        this._fonction = value;
    }

    get role(): string[] {
        return this._role;
    }

    set role(value: string[]) {
        this._role = value;
    }

    get entreprise(): Entreprise {
        return this._entreprise;
    }

    set entreprise(value: Entreprise) {
        this._entreprise = value;
    }


    get id(): number {
        return this._id;
    }

    get tel(): string {
        return this._tel;
    }

    set tel(value: string) {
        this._tel = value;
    }

}
