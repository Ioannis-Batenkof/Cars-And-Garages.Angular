import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import { CarService } from '../car.service';
import { GarageService } from '../garage.service';
@Component({
  selector: 'app-homepage',
  imports: [CommonModule],
  templateUrl: "./homepage.component.html",
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent {
  title = "Cars&Garages"

  constructor(private carService: CarService, private garageService: GarageService){}

  ConfirmDeleteCars1():void{
    const confirmed = confirm('Are you sure you want to delete ALL of the cars?');
    if (confirmed) {
      this.ConfirmDeleteCars2();
    }
  }

  ConfirmDeleteCars2():void{
    const confirmed = confirm('Are you ABSOLUTELY sure?');
    if (confirmed) {
      this.DeleteAllCars();
    }
  }

  DeleteAllCars():void {
    this.carService.DeleteAll().subscribe({
      next: () => {
        alert("All cars have been deleted!");
      },
      error(err) {
        alert("Something went wrong! Could not execute deletion, "+err)
      },
    })
  }

  ConfirmDeleteGarages1():void{
    const confirmed = confirm('Are you sure you want to delete ALL the garages?');
    if (confirmed) {
      this.ConfirmDeleteGarages2();
    }
  }

  ConfirmDeleteGarages2():void{
    const confirmed = confirm('Are you sure ABSOLUTELY sure?');
    if (confirmed) {
      this.DeleteAllGarages();
    }
  }

  DeleteAllGarages():void {
    this.garageService.DeleteAll().subscribe({
      next: () => {
        alert("All garages have been deleted!");
      },
      error(err) {
        alert("Something went wrong! Could not execute deletion, "+err)
      },
    })
  }
}