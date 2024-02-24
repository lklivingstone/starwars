import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { SwapiService, StarWarsAPIResult, StarWarsPlanet, ResidentDetails } from '../../../service/swapi.service';
import { PaginationService } from '../../../service/pagination/pagination.service';

@Component({
  selector: 'planets-planetslist',
  templateUrl: './planetslist.component.html',
  styleUrl: './planetslist.component.css'
})
export class PlanetslistComponent implements OnInit, OnDestroy {
  page: number = 1;
  currentResidentID!: number;

  showResidents: Boolean = false;
  
  currentResidentDetails!: ResidentDetails;
  planetList!: StarWarsPlanet[];

  paramsSubscription!: Subscription;
  swapiPlanetsSubscription!: Subscription;
  swapiResidentDetailsSubscription!: Subscription;
  paginationCurrentPageSubscription!: Subscription;

  loadingResidentDetails: Boolean = false;
  loadingPlanets: Boolean = false;

  sampleResidents = [
    "https://swapi.dev/api/people/1/",
				"https://swapi.dev/api/people/2/",
				"https://swapi.dev/api/people/4/",
				"https://swapi.dev/api/people/6/",
				"https://swapi.dev/api/people/7/",
				"https://swapi.dev/api/people/8/",
				"https://swapi.dev/api/people/9/",
				"https://swapi.dev/api/people/11/",
				"https://swapi.dev/api/people/43/",
				"https://swapi.dev/api/people/62/",
        "https://swapi.dev/api/people/1/",
				"https://swapi.dev/api/people/2/",
				"https://swapi.dev/api/people/4/",
				"https://swapi.dev/api/people/6/",
				"https://swapi.dev/api/people/7/",
				"https://swapi.dev/api/people/8/",
				"https://swapi.dev/api/people/9/",
				"https://swapi.dev/api/people/11/",
				"https://swapi.dev/api/people/43/",
				"https://swapi.dev/api/people/62/"
  ]

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private swapiService: SwapiService,
    private paginationService: PaginationService
  ) {
    
  }

  showResidentsContainer: boolean = false;

  setCurrentResidentID(residentID: string) {
    this.currentResidentID = +residentID;
    this.fetchResidentDetails(this.currentResidentID);
  }

  toggleResidentsContainer(currentPlanet: StarWarsPlanet, toggle: boolean) {
    this.showResidentsContainer = !this.showResidentsContainer;
    if (toggle && currentPlanet.residents.length > 0) {
      this.currentResidentID = Number(currentPlanet.residents[0].split("/")[5]);
      console.log(this.currentResidentID)
      this.fetchResidentDetails(this.currentResidentID);
    }
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.page = params['page'];
      console.log(this.page)
      this.fetchPlanets();
    });

    this.paginationCurrentPageSubscription = this.paginationService
    .getSelectedCurrentPage()
    .subscribe(selectedCurrentPage => {
      this.loadingPlanets = true;
      this.page = Number(selectedCurrentPage);
      this.router.navigate([], {
        relativeTo: this.route,
        queryParams: { page: this.page },
        queryParamsHandling: 'merge',
      });
    });
  }

  
  expandPlanetCard(planet: StarWarsPlanet, btn: Boolean) {
    if (!btn) {
      planet.isExpanded = true;
    }
    else {
      planet.isExpanded = false;
      this.showResidentsContainer = false;
    }
  }


  ngOnDestroy() {
    if (this.swapiPlanetsSubscription) {
      this.swapiPlanetsSubscription.unsubscribe();
    }

    if (this.swapiResidentDetailsSubscription) {
      this.swapiResidentDetailsSubscription.unsubscribe();
    }

    if (this.paginationCurrentPageSubscription) {
      this.paginationCurrentPageSubscription.unsubscribe();
    }
  }

  fetchResidentDetails(residentID: number) {
    this.loadingResidentDetails = true;
    this.swapiResidentDetailsSubscription = this.swapiService
    .getResidentDetails(residentID)
    .subscribe(
      (response: ResidentDetails) => {
        this.loadingResidentDetails = false;
        console.log(response);
        this.currentResidentDetails = response;
      },
      (error: any) => {
        console.log(error);
      }
    )
  }
  
  fetchPlanets() {
    this.loadingPlanets = true;
    this.swapiPlanetsSubscription = this.swapiService.getPlanets(this.page).subscribe(
      (response: StarWarsAPIResult) => {
        this.loadingPlanets = false;
        this.planetList = response.results;
      },
      (error: any) => {
        console.log(error);
      }
    )
  }
}