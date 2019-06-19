import {Plan} from './Plan.model';
import {Module} from './Module.model';
import {Entreprise} from './Entreprise.model';

export class Abonnement {
    private _id:string;
    private _dateDebut: string;
    private _dateFin: string;
    private _periode: number;
    private _total: number;
    private _details: string;
    private _plan: Plan;
    private _modules: Module[];
    private _entreprise: Entreprise;


    get entreprise(): Entreprise {
        return this._entreprise;
    }

    set entreprise(value: Entreprise) {
        this._entreprise = value;
    }

    get modules(): Module[] {
        return this._modules;
    }

    set modules(value: Module[]) {
        this._modules = value;
    }

    get id(): string {
        return this._id;
    }

    set id(value: string) {
        this._id = value;
    }

    get dateDebut(): string {
        return this._dateDebut;
    }

    set dateDebut(value: string) {
        this._dateDebut = value;
    }

    get dateFin(): string {
        return this._dateFin;
    }

    set dateFin(value: string) {
        this._dateFin = value;
    }

    get periode(): number {
        return this._periode;
    }

    set periode(value: number) {
        this._periode = value;
    }

    get total(): number {
        return this._total;
    }

    set total(value: number) {
        this._total = value;
    }

    get details(): string {
        return this._details;
    }

    set details(value: string) {
        this._details = value;
    }


    get plan(): Plan {
        return this._plan;
    }

    set plan(value: Plan) {
        this._plan = value;
    }

    constructor() {
    }
}
