export class Favoris {

    public id: number;
    public userId: number;
    public offreId: number;

    constructor(userId: number , offreId: number) {
        this.userId = userId;
        this.offreId = offreId;
    }
}
