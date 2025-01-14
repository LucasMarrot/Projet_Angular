import { TestBed } from '@angular/core/testing';
import {
    HttpClientTestingModule,
    HttpTestingController,
} from '@angular/common/http/testing';
import { InterventionsService } from './interventions.service';
import { Intervention } from '../models/intervention.modele';
import { of } from 'rxjs';

describe('InterventionsService', () => {
    let service: InterventionsService;
    let httpMock: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [InterventionsService],
        });

        service = TestBed.inject(InterventionsService);
        httpMock = TestBed.inject(HttpTestingController);
    });

    afterEach(() => {
        httpMock.verify();
    });

    // Test de la méthode getInterventions()
    it('should fetch all interventions', () => {
        const mockInterventions: Intervention[] = [
            {
                id: 1,
                date: new Date(),
                description: 'Test intervention',
                duree: 2,
                idChaudiere: 1,
            },
            {
                id: 2,
                date: new Date(),
                description: 'Another intervention',
                duree: 1,
                idChaudiere: 2,
            },
        ];

        service.getInterventions().subscribe(interventions => {
            expect(interventions.length).toBe(2);
            expect(interventions).toEqual(mockInterventions);
        });

        const req = httpMock.expectOne('http://localhost:3000/Intervention');
        expect(req.request.method).toBe('GET');
        req.flush(mockInterventions);
    });

    // Test de la méthode getInterventionById()
    it('should fetch a single intervention by id', () => {
        const mockIntervention: Intervention = {
            id: 1,
            date: new Date(),
            description: 'Test intervention',
            duree: 2,
            idChaudiere: 1,
        };

        service.getInterventionById(1).subscribe(intervention => {
            expect(intervention).toEqual(mockIntervention);
        });

        const req = httpMock.expectOne('http://localhost:3000/Intervention/1');
        expect(req.request.method).toBe('GET');
        req.flush(mockIntervention);
    });

    // Test de la méthode addIntervention()
    it('should add a new intervention and return it', () => {
        const newIntervention: Intervention = {
            id: 0,
            date: new Date(),
            description: 'New intervention',
            duree: 3,
            idChaudiere: 1,
        };

        const mockInterventions: Intervention[] = [
            {
                id: 1,
                date: new Date(),
                description: 'Test intervention',
                duree: 2,
                idChaudiere: 1,
            },
        ];

        const addedIntervention: Intervention = {
            ...newIntervention,
            id: 2, // Simulate auto-assigned id
        };

        // Simulate getInterventions() returning a list with one intervention
        spyOn(service, 'getInterventions').and.returnValue(
            of(mockInterventions)
        );

        service.addIntervention(newIntervention).subscribe(intervention => {
            expect(intervention).toEqual(addedIntervention);
        });

        const postReq = httpMock.expectOne(
            'http://localhost:3000/Intervention'
        );
        expect(postReq.request.method).toBe('POST');
        expect(postReq.request.body).toEqual(addedIntervention);
        postReq.flush(addedIntervention);
    });
});
