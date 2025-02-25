import { Routes,RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomepageComponent } from './homepage/homepage.component';
import { GaragesComponent } from './garages/garages.component';
import { CarsComponent } from './cars/cars.component';
import { GaragesDetailsComponent } from './garages-details/garages-details.component';
import { CarsDetailsComponent } from './cars-details/cars-details.component';
import { CarsCreationComponent } from './cars-creation/cars-creation.component';
import { GaragesCreationComponent } from './garages-creation/garages-creation.component';
import { CarsAvailableComponent } from './cars-available/cars-available.component';


export const routes: Routes = [
    {path: '', component: HomepageComponent,},
    {path: 'garages', component: GaragesComponent},
    {path: 'cars', component: CarsComponent},
    {path: 'garages/details/:id', component: GaragesDetailsComponent},
    {path: 'cars/details/:id', component: CarsDetailsComponent},
    {path: 'cars/create', component: CarsCreationComponent},
    {path: 'garages/create', component: GaragesCreationComponent},
    {path: 'garages/:id/cars', component: CarsAvailableComponent}
];

export  default routes;
