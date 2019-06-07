export class Media {
    private _link:string;
    private _type: string;

    get link(): string {
        return this._link;
    }

    set link(value: string) {
        this._link = value;
    }

    get type(): string {
        return this._type;
    }

    set type(value: string) {
        this._type = value;
    }

    constructor() {
    }
}
