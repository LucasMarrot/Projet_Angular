export class Intervention {
    id!: number;
    date!: Date;
    description!: string;
    duree!: number;
    idChaudiere!: number;

    constructor(
        id: number,
        date: Date,
        description: string,
        duree: number,
        idChaudiere: number
    ) {
        this.id = id;
        this.date = date;
        this.description = description;
        this.duree = duree;
        this.idChaudiere = idChaudiere;
    }
}
