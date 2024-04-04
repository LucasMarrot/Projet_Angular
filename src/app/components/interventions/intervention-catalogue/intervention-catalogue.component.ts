import { Component, OnInit } from '@angular/core';
import { Intervention } from '../../../models/intervention.modele';
import { InterventionsService } from '../../../services/interventions.service';

@Component({
    selector: 'app-intervention-catalogue',
    templateUrl: './intervention-catalogue.component.html',
    styleUrl: './intervention-catalogue.component.scss',
})
export class InterventionCatalogueComponent implements OnInit {
    listInterventions!: Intervention[];

    constructor(private myInterventionsService: InterventionsService) {}

    ngOnInit(): void {
        this.myInterventionsService
            .getInterventions()
            .subscribe(interventions => {
                this.listInterventions = interventions;
            });
    }
}
