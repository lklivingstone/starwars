import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlanetslistComponent } from './components/planetslist/planetslist.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { Planets } from './components/planets/planets.component';


@NgModule({
  declarations: [
    PlanetslistComponent,
    PaginationComponent,
    NavbarComponent,
    Planets
  ],
  imports: [
    CommonModule
  ]
})
export class PlanetsModule { }
