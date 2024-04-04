import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Chaudiere } from '../models/chaudiere.model';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
    providedIn: 'root',
})
export class ChaudieresService {
    constructor(private http: HttpClient) {}

    getChaudieres(): Observable<Chaudiere[]> {
        return this.http.get<Chaudiere[]>('http://localhost:3000/Chaudiere');
    }

    getChaudiereById(id: number): Observable<Chaudiere> {
        return this.http.get<Chaudiere>(
            'http://localhost:3000/Chaudiere/' + id
        );
    }
}
