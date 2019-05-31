export class Favoris {

    private _id: number;
    private _userId: number;
    private _offreId: number;

    constructor(userId : number , offreId: number) {
        this.userId = userId;
        this.offreId = offreId;
    }

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get userId(): number {
        return this._userId;
    }

    set userId(value: number) {
        this._userId = value;
    }

    get offreId(): number {
        return this._offreId;
    }

    set offreId(value: number) {
        this._offreId = value;
    }
}
