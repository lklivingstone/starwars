import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from  '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeModule } from './home/home.module';
import { PlanetsModule } from './planets/planets.module';
import { InvalidURLModule } from './invalid-url/invalid-url.module';

import { SwapiService } from './service/swapi.service';
import { CacheService } from './service/cache-service/cache.service';

import { CacheInterceptor } from './interceptors/cache-interceptor/cache.interceptor';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    HomeModule,
    PlanetsModule,
    InvalidURLModule
  ],
  providers: [
    SwapiService,
    CacheService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CacheInterceptor,
      multi: true
    }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
