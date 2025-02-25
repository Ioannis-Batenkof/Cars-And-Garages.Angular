import { Component, OnInit, Input } from '@angular/core';
import { Garage } from '../garage';
import { GarageService } from '../garage.service';
import { RouterModule } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-garages',
  imports: [RouterModule],
  templateUrl: './garages.component.html',
  styleUrl: './garages.component.css'
})
export class GaragesComponent implements OnInit{
  garages: Garage[] = [];

  constructor(private garageService: GarageService, private location: Location) {}

  ngOnInit() {
    this.garageService.GetAll().subscribe({
      next: (data) => (this.garages = data)
    });
  }

  
}
