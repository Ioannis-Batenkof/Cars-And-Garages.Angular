import { Component } from '@angular/core';
import { Car } from '../car';
import { ActivatedRoute, Router } from '@angular/router';
import { CarService } from '../car.service';
import { GarageService } from '../garage.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-cars-available',
  imports: [],
  templateUrl: './cars-available.component.html',
  styleUrl: './cars-available.component.css'
})
export class CarsAvailableComponent {
  cars?: Car[];
  ID!: string;

  constructor(private router: Router, private carService: CarService, private route: ActivatedRoute, private garageService: GarageService, private location: Location) {}

  ngOnInit(): void {
    this.carService.GetAllAvailable().subscribe({
      next: (data) => {
        this.cars = data;
      },
      error: (err) => {
        alert(err);
        this.location.back();
      }
    });
    this.ID = this.route.snapshot.paramMap.get('id')!;
  }

  AddCarToGarage(id: string): void
  {
    this.garageService.AddCarToGarage(this.ID, id).subscribe({
      next: () => {
        this.router.navigateByUrl('/garages/details/'+this.ID);
      },
      error: () =>
      {
        alert('Could not add the car');
        this.location.back();
      }
    })
  }

  Cancel(): void {
    this.location.back();
  }
}
