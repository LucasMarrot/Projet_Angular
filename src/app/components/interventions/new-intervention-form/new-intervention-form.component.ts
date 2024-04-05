import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Intervention } from '../../../models/intervention.modele';
import { InterventionsService } from '../../../services/interventions.service';

@Component({
    selector: 'app-new-intervention-form',
    templateUrl: './new-intervention-form.component.html',
    styleUrl: './new-intervention-form.component.scss',
})
export class NewInterventionFormComponent implements OnInit {
    formulaire!: FormGroup;
    currentIntervention!: Intervention;
    thumbRegex!: RegExp;

    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private InterventionService: InterventionsService
    ) {}

    ngOnInit(): void {
        //Pour faire un pattern
        /*this.thumbRegex = new RegExp(
            'https?://.*.(?:png|jpg|jpeg|gif|svg|webp)$'
        );*/

        this.formulaire = this.formBuilder.group({
            date: [null, [Validators.required]],
            description: [null, [Validators.required]],
            duree: [null, [Validators.required]],
            idChaudiere: [null, [Validators.required]],
        });

        this.formulaire.valueChanges.subscribe(formValue => {
            this.currentIntervention = {
                id: 0,
                date: formValue.title,
                description: formValue.author,
                duree: formValue.thumbnail,
                idChaudiere: formValue.dateDeSortie,
            };
        });
    }

    onFormButtonClick = (): void => {
        const newIntervention: Intervention = {
            id: 0,
            date: this.formulaire.get('title')?.value,
            description: this.formulaire.get('author')?.value,
            duree: this.formulaire.get('thumbnail')?.value,
            idChaudiere: this.formulaire.get('dateDeSortie')?.value,
        };

        this.InterventionService.addIntervention(newIntervention).subscribe({
            next: () => {
                this.router.navigateByUrl('/interventions');
            },
            error: err => {
                console.error(
                    'Observale ajout Intervention a émis une erreur : ' + err
                );
                alert("Désolé le Intervention n'a pas pu être ajouté");
            },
        });
    };
}
