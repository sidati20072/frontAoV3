export class Parametre {
    private _id : string;
    private _titre:string;
    private _presentation: string;
    private _mode: string;
    private _langue: string;
    private _logo: string;

    constructor() {
    }

    get id(): string {
        return this._id;
    }

    set id(value: string) {
        this._id = value;
    }

    get titre(): string {
        return this._titre;
    }

    set titre(value: string) {
        this._titre = value;
    }

    get presentation(): string {
        return this._presentation;
    }

    set presentation(value: string) {
        this._presentation = value;
    }

    get mode(): string {
        return this._mode;
    }

    set mode(value: string) {
        this._mode = value;
    }

    get langue(): string {
        return this._langue;
    }

    set langue(value: string) {
        this._langue = value;
    }

    get logo(): string {
        return this._logo;
    }

    set logo(value: string) {
        this._logo = value;
    }
}
