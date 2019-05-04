export class Demande {
    private _id: string;
    private _createAt: string;
    private _dateExecution: string;
    private _duree: string;
    private _description: string;
    private _tarif: string;
    private _etat: boolean;
    private _devis: string;
    constructor(){}

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

    get dateExecution(): string {
        return this._dateExecution;
    }

    set dateExecution(value: string) {
        this._dateExecution = value;
    }

    get duree(): string {
        return this._duree;
    }

    set duree(value: string) {
        this._duree = value;
    }

    get description(): string {
        return this._description;
    }

    set description(value: string) {
        this._description = value;
    }

    get tarif(): string {
        return this._tarif;
    }

    set tarif(value: string) {
        this._tarif = value;
    }


    get etat(): boolean {
        return this._etat;
    }

    set etat(value: boolean) {
        this._etat = value;
    }

    get devis(): string {
        return this._devis;
    }

    set devis(value: string) {
        this._devis = value;
    }
}
