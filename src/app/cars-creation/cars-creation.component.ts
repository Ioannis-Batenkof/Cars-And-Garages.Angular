import { Component } from '@angular/core';
import { Car } from '../car';
import { CarService } from '../car.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Location } from '@angular/common';


@Component({
  selector: 'app-cars-creation',
  imports: [FormsModule],
  templateUrl: './cars-creation.component.html',
  styleUrl: './cars-creation.component.css'
})
export class CarsCreationComponent {
  car: Car = {} as Car;
  constructor(private route: ActivatedRoute, private carService: CarService, private router: Router, private location: Location) {}

  Create():void
  {
    let nCar = {} as Car

    this.carService.Create(this.car).subscribe({
      next: (data) => {
        nCar = data;
        alert('Car created! Name: '+ nCar.Manufacturer + " ID: "+ nCar.ID);
        this.location.back();
        
      },
      error: (err) => {
        alert('Failed to Create car: ' + err);
      }
    }
    );
  }

  Cancel():void{
    this.location.back();
  }
}
