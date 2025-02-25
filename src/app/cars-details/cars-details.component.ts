import { Component, Input } from '@angular/core';
import { Car } from '../car';
import { CarService } from '../car.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'app-cars-details',
  imports: [FormsModule],
  templateUrl: './cars-details.component.html',
  styleUrl: './cars-details.component.css'
})
export class CarsDetailsComponent {
  id!: string; // or number if IDs are numeric
  car!: Car;
  constructor(private route: ActivatedRoute, private carService: CarService, private router: Router, private location: Location) {}

  newCar: Car = {} as Car;
  editMode: boolean = false;

  ngOnInit(): void {
    // Get the ID from the route
    this.id = this.route.snapshot.paramMap.get('id')!;
    this.carService.GetOne(this.id).subscribe({
      next: (data) => {(this.car = data);
      this.newCar = {...data};
  }});
  }

  ConfirmDelete(): void {
    const confirmed = confirm('Are you sure you want to delete this car?');
    if (confirmed) {
      this.DeleteCar();
    }
  }

  ToggleEdit(): boolean {
    return !this.editMode;
  }

  SaveChanges(): void {

    if (!this.car) {
      alert("Car data is missing");
      return;
    }
    else if (!this.newCar) {
      alert("New data is missing");
      return;
    }

    const carCopy = {...this.car} as Car

    if (this.newCar?.Horsepower != this.car?.Horsepower && this.newCar?.Horsepower != 0) {
      this.car.Horsepower = this.newCar!.Horsepower
    }
    if (this.newCar?.Year != this.car?.Year && this.newCar?.Year != 0) {
      this.car.Year = this.newCar!.Year
    }
    if (this.newCar?.Manufacturer != this.car?.Manufacturer && this.newCar?.Manufacturer != "" && this.newCar?.Manufacturer != null) {
      this.car.Manufacturer = this.newCar.Manufacturer
    }
    if (this.newCar?.Model != this.car?.Model && this.newCar?.Model != "" && this.newCar?.Model != null) {
      this.car.Model = this.newCar.Model
    }


    this.carService.Update(this.car).subscribe({
      next: () => {
        this.router.navigate(['/cars/' + this.car.ID]);
      },
      error: (err) => {
        alert('Failed to Update car: ' + err);
        this.car = {...carCopy};
        this.newCar = {...carCopy};
      }
    }
    );

    this.editMode = false;
  }

  DeleteCar(): void {
    // Call the service to delete the car by ID
    this.carService.Delete(this.id).subscribe({
      next: () => {
        this.location.back(); // Redirect to cars list page
      },
      error: (err) => {
        console.error('Error deleting car:', err);
        alert('Failed to delete the car');
      }
    });
  }

  
  Back(): void
  {
    this.location.back();
  }
}
