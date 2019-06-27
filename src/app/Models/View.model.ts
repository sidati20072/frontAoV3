import {Offre} from './Offre.model';

export class View {

    private _id: number;
    private _count : string;
    private _offreId: Offre;

    constructor() {
    }

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get offreId(): Offre {
        return this._offreId;
    }

    set offreId(value: Offre) {
        this._offreId = value;
    }

    get count(): string {
        return this._count;
    }

    set count(value: string) {
        this._count = value;
    }
}
