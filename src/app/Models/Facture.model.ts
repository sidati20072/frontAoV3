import {Abonnement} from './Abonnement.model';
import {Entreprise} from './Entreprise.model';

export class Facture {
   private _id: string;
    private _createAt:string;
    private _address: string;
    private _city: string;
    private _postal: string;
    private _paymentMethode: string;
    private _abonnement: Abonnement;
    private _entreprise: Entreprise;


    get id(): string {
        return this._id;
    }

    set id(value: string) {
        this._id = value;
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

    get city(): string {
        return this._city;
    }

    set city(value: string) {
        this._city = value;
    }

    get postal(): string {
        return this._postal;
    }

    set postal(value: string) {
        this._postal = value;
    }

    get paymentMethode(): string {
        return this._paymentMethode;
    }

    set paymentMethode(value: string) {
        this._paymentMethode = value;
    }

    get abonnement(): Abonnement {
        return this._abonnement;
    }

    set abonnement(value: Abonnement) {
        this._abonnement = value;
    }

    get entreprise(): Entreprise {
        return this._entreprise;
    }

    set entreprise(value: Entreprise) {
        this._entreprise = value;
    }

    constructor() {
    }
}
