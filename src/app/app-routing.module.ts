import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Home } from './home/home.component';
import { Planets } from './planets/components/planets/planets.component';
import { InvalidURL } from './invalid-url/invalid-url.component';

const routes: Routes = [
  { path: '', component: Home },
  { path: 'planets', component: Planets },
  { path: '**', component: InvalidURL },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}