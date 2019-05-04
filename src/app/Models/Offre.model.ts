import {Entreprise} from './Entreprise.model';
import {User} from './User.model';
import {Demande} from './Demande.model';

export class Offre {
    private _id: string;
    private _objet: string;
    private _type: string;
    private _description: string;
    private _dateLimite: string;
    private _dateExecution: string;
    private _city: string;
    private _pays: string;
    private _createAt: string;
    private _address: string;
    private _user: User;
    private _entreprise: Entreprise;
    private _demandes: Demande[];
    constructor() {}


    get id(): string {
        return this._id;
    }
    get objet(): string {
        return this._objet;
    }

    set objet(value: string) {
        this._objet = value;
    }

    get type(): string {
        return this._type;
    }

    set type(value: string) {
        this._type = value;
    }

    get description(): string {
        return this._description;
    }

    set description(value: string) {
        this._description = value;
    }

    get dateLimite(): string {
        return this._dateLimite;
    }

    set dateLimite(value: string) {
        this._dateLimite = value;
    }

    get dateExecution(): string {
        return this._dateExecution;
    }

    set dateExecution(value: string) {
        this._dateExecution = value;
    }

    get city(): string {
        return this._city;
    }

    set city(value: string) {
        this._city = value;
    }

    get pays(): string {
        return this._pays;
    }

    set pays(value: string) {
        this._pays = value;
    }

    get createAt(): string {
        return this._createAt;
    }

    set createAt(value: string) {
        this._createAt = value;
    }

    get address(): string {
        return this._address;
    }

    set address(value: string) {
        this._address = value;
    }

    get user(): User {
        return this._user;
    }

    set user(value: User) {
        this._user = value;
    }

    get entreprise(): Entreprise {
        return this._entreprise;
    }

    set entreprise(value: Entreprise) {
        this._entreprise = value;
    }

    get demandes(): Demande[] {
        return this._demandes;
    }

    set demandes(value: Demande[]) {
        this._demandes = value;
    }
}
