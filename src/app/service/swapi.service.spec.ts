import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { SwapiService, ResidentDetails, StarWarsAPIResult } from './swapi.service';

describe('SwapiService', () => {
  let service: SwapiService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [SwapiService],
    });

    service = TestBed.inject(SwapiService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get planets', () => {
    const currentPage = 1;
    const mockResult: StarWarsAPIResult = {
      count: 1,
      next: null,
      previous: null,
      results: [
        {
          name: 'Tatooine',
          rotation_period: '23',
          orbital_period: '304',
          diameter: '10465',
          climate: 'arid',
          gravity: '1 standard',
          terrain: 'desert',
          surface_water: '1',
          population: '200000',
          residents: ['1'],
          films: ['1'],
          created: '2024-02-23T00:00:00.000Z',
          edited: '2024-02-23T00:00:00.000Z',
          url: 'https://swapi.dev/api/planets/1/',
          isExpanded: false,
        },
      ],
    };

    service.getPlanets(currentPage).subscribe((result) => {
      expect(result).toEqual(mockResult);
    });

    const req = httpTestingController.expectOne(`https://swapi.dev/api/planets/?page=${currentPage}&format=json`);
    expect(req.request.method).toEqual('GET');
    req.flush(mockResult);
  });

  it('should get resident details', () => {
    const residentID = 1;
    const mockResidentDetails: ResidentDetails = {
      name: 'Luke Skywalker',
      height: '172',
      mass: '77',
      gender: 'male',
    };

    service.getResidentDetails(residentID).subscribe((details) => {
      expect(details).toEqual(mockResidentDetails);
    });

    const req = httpTestingController.expectOne(`https://swapi.dev/api/people/${residentID}/`);
    expect(req.request.method).toEqual('GET');
    req.flush(mockResidentDetails);
  });
});
