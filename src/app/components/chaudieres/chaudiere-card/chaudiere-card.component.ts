import { Component, Input, OnInit } from '@angular/core';
import { Chaudiere } from '../../../models/chaudiere.model';
import { ChaudieresService } from '../../../services/chaudieres.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-chaudiere-card',
    templateUrl: './chaudiere-card.component.html',
    styleUrl: './chaudiere-card.component.scss',
})
export class ChaudiereCardComponent implements OnInit {
    @Input() Chaudiere!: Chaudiere;
    laChaudiere!: Chaudiere;
    idChaudiere!: number;

    constructor(
        private ChaudiereService: ChaudieresService,
        private route: ActivatedRoute
    ) {}

    ngOnInit(): void {
        this.idChaudiere = this.route.snapshot.params['id'];
        if (this.idChaudiere !== undefined) {
            this.ChaudiereService.getChaudiereById(+this.idChaudiere).subscribe(
                chaudiere => (this.laChaudiere = chaudiere)
            );
        } else {
            this.laChaudiere = this.Chaudiere;
        }
    }
}
