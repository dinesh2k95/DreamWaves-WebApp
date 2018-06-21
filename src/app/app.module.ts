import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpModule} from '@angular/http'

import { AppComponent } from './app.component';
import {HeroesComponent} from './heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import {DashboardComponent} from './dashboard/dashboard.component'
import { CreateStudentComponent } from './createStudent/create-student.component'
import {HeroService} from './hero.service'

import {AppRoutingModule} from './app-route.module'

// import {InMemoryWebApiModule} from 'angular-in-memory-web-api';
// import { InMemoryDataService } from "./in-memory-data.service";

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    DashboardComponent,
    CreateStudentComponent
    ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpModule,
    // InMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
