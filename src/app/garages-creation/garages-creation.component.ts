import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GarageService } from '../garage.service';
import { Garage } from '../garage';
import { FormsModule } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'app-garages-creation',
  imports: [FormsModule],
  templateUrl: './garages-creation.component.html',
  styleUrl: './garages-creation.component.css'
})
export class GaragesCreationComponent {

  garage: Garage = {} as Garage;

  constructor(private route: ActivatedRoute, private garageService: GarageService, private router: Router, private location: Location) { }

  Create(): void {

    let nGarage = {} as Garage

    this.garageService.Create(this.garage).subscribe({
      next: (data) => {
        nGarage = data
        alert('Garage created! Name: '+ nGarage.BelongsTo + " ID: " + nGarage.ID);
        this.location.back();
      },
      error: (err) => {
        alert('Failed to Create car: ' + err);
      }
    }
    );
  }

  Cancel(): void {
    this.location.back();
  }
}
