import { Component, OnInit } from '@angular/core';
import { Chaudiere } from '../../../models/chaudiere.model';
import { ChaudieresService } from '../../../services/chaudieres.service';

@Component({
    selector: 'app-chaudiere-catalogue',
    templateUrl: './chaudiere-catalogue.component.html',
    styleUrl: './chaudiere-catalogue.component.scss',
})
export class ChaudiereCatalogueComponent implements OnInit {
    listChaudieres!: Chaudiere[];

    constructor(private myChaudieresService: ChaudieresService) {}

    ngOnInit(): void {
        this.myChaudieresService.getChaudieres().subscribe(chaudieres => {
            this.listChaudieres = chaudieres;
        });
    }
}
