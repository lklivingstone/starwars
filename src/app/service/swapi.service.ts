import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface StarWarsPlanet {
  name: string;
  rotation_period: string;
  orbital_period: string;
  diameter: string;
  climate: string;
  gravity: string;
  terrain: string;
  surface_water: string;
  population: string;
  residents: string[];
  films: string[];
  created: string;
  edited: string;
  url: string;
  isExpanded?: boolean;
}

export interface StarWarsAPIResult {
  count: number;
  next: string | null;
  previous: string | null;
  results: StarWarsPlanet[];
}

export interface ResidentDetails {
  name: number;
  height: string;
  mass: string;
  gender: string;
}

@Injectable({
  providedIn: 'root'
})
export class SwapiService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getPlanets(currentPage: number): Observable<StarWarsAPIResult> {
    return this.httpClient.get<StarWarsAPIResult>(
      `https://swapi.dev/api/planets/?page=${currentPage}&format=json`
    );
  }

  getResidentDetails(residentID: number): Observable<ResidentDetails> {
    return this.httpClient.get<ResidentDetails>(
      `https://swapi.dev/api/people/${residentID}/`
    )
  }
}
