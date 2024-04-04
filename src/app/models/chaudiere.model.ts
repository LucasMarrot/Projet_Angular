export class Chaudiere {
    id!: number;
    nomClient!: string;
    adresseClient!: string;
    modele!: string;
    dateMiseEnService!: Date;
    numDeSerie!: number;
    idInterventions!: number[];

    constructor(
        id: number,
        nomClient: string,
        adresseClient: string,
        modele: string,
        dateMiseEnService: Date,
        numDeSerie: number,
        idInterventions: number[]
    ) {
        this.id = id;
        this.nomClient = nomClient;
        this.adresseClient = adresseClient;
        this.modele = modele;
        this.dateMiseEnService = dateMiseEnService;
        this.numDeSerie = numDeSerie;
        this.idInterventions = idInterventions;
    }
}
