import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ChaudieresService } from './chaudieres.service';
import { Chaudiere } from '../models/chaudiere.model';

describe('ChaudieresService', () => {
  let service: ChaudieresService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ChaudieresService],
    });

    service = TestBed.inject(ChaudieresService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify(); // Vérifie qu'aucune requête inattendue n'a été effectuée
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('#getChaudieres', () => {
    it('should fetch a list of Chaudiere objects', () => {
      const mockChaudieres: Chaudiere[] = [
        new Chaudiere(1, 'Client 1', 'Adresse 1', 'Modèle 1', new Date('2023-01-01'), 123456, [1, 2]),
        new Chaudiere(2, 'Client 2', 'Adresse 2', 'Modèle 2', new Date('2023-02-01'), 654321, [3, 4]),
      ];

      service.getChaudieres().subscribe((chaudieres) => {
        expect(chaudieres.length).toBe(2);
        expect(chaudieres).toEqual(mockChaudieres);
      });

      const req = httpMock.expectOne('http://localhost:3000/Chaudiere');
      expect(req.request.method).toBe('GET');
      req.flush(mockChaudieres); // Simule une réponse avec les données
    });
  });

  describe('#getChaudiereById', () => {
    it('should fetch a single Chaudiere by ID', () => {
      const mockChaudiere: Chaudiere = new Chaudiere(
        1,
        'Client 1',
        'Adresse 1',
        'Modèle 1',
        new Date('2023-01-01'),
        123456,
        [1, 2]
      );

      service.getChaudiereById(1).subscribe((chaudiere) => {
        expect(chaudiere).toEqual(mockChaudiere);
      });

      const req = httpMock.expectOne('http://localhost:3000/Chaudiere/1');
      expect(req.request.method).toBe('GET');
      req.flush(mockChaudiere); // Simule une réponse avec un seul objet
    });
  });
});
