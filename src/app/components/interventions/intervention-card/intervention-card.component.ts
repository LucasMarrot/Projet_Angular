import { Component, Input, OnInit } from '@angular/core';
import { Intervention } from '../../../models/intervention.modele';
import { InterventionsService } from '../../../services/interventions.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-intervention-card',
    templateUrl: './intervention-card.component.html',
    styleUrl: './intervention-card.component.scss',
})
export class InterventionCardComponent implements OnInit {
    @Input() Intervention!: Intervention;
    lIntervention!: Intervention;
    idIntervention!: number;

    constructor(
        private InterventionService: InterventionsService,
        private route: ActivatedRoute
    ) {}

    ngOnInit(): void {
        this.idIntervention = this.route.snapshot.params['id'];
        if (this.idIntervention !== undefined) {
            this.InterventionService.getInterventionById(
                +this.idIntervention
            ).subscribe(intervention => (this.lIntervention = intervention));
        } else {
            this.lIntervention = this.Intervention;
        }
    }
}
