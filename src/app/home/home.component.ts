import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SwapiService, StarWarsAPIResult } from '../service/swapi.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class Home {
  constructor(
    private router: Router,
    // private swapiService: SwapiService
    ) {}

  backgroundUrl: string = "../../assets/images/kylo-ren.jpeg";

  toggleBackground() {
    this.backgroundUrl = "../../assets/images/kylo-ren.gif";

    setTimeout(() => {
      this.backgroundUrl = "../../assets/images/kylo-ren.jpeg";
      this.router.navigate(['/planets'], {
        queryParams: { page: 1 },
      });
    }, 1800);
  }

}
