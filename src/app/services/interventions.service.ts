import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, switchMap } from 'rxjs';
import { Intervention } from '../models/intervention.modele';

@Injectable({
    providedIn: 'root',
})
export class InterventionsService {
    constructor(private http: HttpClient) {}

    getInterventions(): Observable<Intervention[]> {
        return this.http.get<Intervention[]>(
            'http://localhost:3000/Intervention'
        );
    }

    getInterventionById(id: number): Observable<Intervention> {
        return this.http.get<Intervention>(
            'http://localhost:3000/Intervention/' + id
        );
    }

    addIntervention(nouvIntervention: Intervention): Observable<Intervention> {
        return this.getInterventions().pipe(
            map(interventions => {
                const lastId =
                    interventions.length > 0
                        ? interventions[interventions.length - 1].id
                        : 0;
                nouvIntervention.id = lastId + 1;
                return nouvIntervention;
            }),
            switchMap(interventionWithId => {
                return this.http.post<Intervention>(
                    'http://localhost:3000/Intervention',
                    interventionWithId
                );
            })
        );
    }
}
