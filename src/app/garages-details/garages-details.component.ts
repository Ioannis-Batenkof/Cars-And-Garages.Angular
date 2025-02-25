import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Garage } from '../garage';
import { GarageService } from '../garage.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Car } from '../car';
import { CarService } from '../car.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-garages-details',
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './garages-details.component.html',
  styleUrl: './garages-details.component.css'
})
export class GaragesDetailsComponent {
  id!: string; // or number if IDs are numeric
  garage!: Garage;
  cars?: Car[];
  newGarage: Garage = {} as Garage;
  editMode: boolean = false;

  constructor(private route: ActivatedRoute, private garageService: GarageService, private router: Router, private carService: CarService) { }

  ngOnInit(): void {
    // Get the ID from the route
    this.id = this.route.snapshot.paramMap.get('id')!;
    this.garageService.GetOne(this.id).subscribe({
      next: (data) => {
        (this.garage = data);
        this.newGarage = { ...this.garage }
      }
    });
  }


  ConfirmDelete(): void {
    const confirmed = confirm('Are you sure you want to delete this garage?');
    if (confirmed) {
      this.DeleteGarage();
    }
  }

  ToggleEdit(): boolean {
    return !this.editMode;
  }

  DeleteGarage(): void {

    this.garageService.Delete(this.id).subscribe({
      next: () => {
        this.router.navigate(['/garages']); // Redirect to garages list page
      },
      error: (err) => {
        console.error('Error deleting garage:', err);
        alert('Failed to delete the garage');
      }
    });
  }


  SaveChanges() {
    if (!this.garage) {
      alert("Garage data is missing");
      return;
    }
    else if (!this.newGarage) {
      alert("New Garage data is missing");
      return;
    }

    const garageCopy: Garage = { ...this.garage }

    if (this.garage.BelongsTo != this.newGarage.BelongsTo) {

      if (this.garage.BelongsTo != null && this.garage.BelongsTo != "") {
        this.garageService.Update(this.newGarage).subscribe({
          next: () => {
            this.garage.BelongsTo = this.newGarage.BelongsTo;
          },
          error: (err) => {
            alert('Failed to Update car: ' + err);
            this.garage = { ...garageCopy };
            this.newGarage = { ...garageCopy };
          }
        }
        );
      }
    }

    this.editMode = false;
  }

  ConfirmCarRemoval(id: string): void {
    const confirmed = confirm('Are you sure you want to delete this car?');
    if (confirmed) {
      this.RemoveCarFromGarage(id);
    }
  }

  RemoveCarFromGarage(id: string): void{
    this.garageService.RemoveCarFromGarage(this.garage.ID, id).subscribe({
      next: () => {
        window.location.reload();
      },
      error: () => {
        alert("Could not remove this car from your garage")
      }
    })
  }
  
}
