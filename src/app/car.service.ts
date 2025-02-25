import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map, Observable } from "rxjs";
import { Car } from "./car";
import { environment } from "../environment";

@Injectable({
    providedIn: 'root'
})
export class CarService {
  private readonly apiURL = environment.apiCarsUrl;

  constructor(private http: HttpClient) {}

  GetAll(): Observable<Car[]>
  {
    return this.http.get<Car[]>(this.apiURL)
  }

  GetAllAvailable(): Observable<Car[]>
  {
    return this.http.get<Car[]>(this.apiURL).pipe(
      map((cars: Car[]) => cars.filter(car => car.Available === true))
    );
  }

  GetOne(id:string): Observable<Car>
  {
    return this.http.get<Car>(this.apiURL+id);
  }

  Delete(id:string): Observable<void>
  {
    return this.http.delete<void>(this.apiURL+id);
  }

  Update(car: Car)
  {
    return this.http.patch<void>(`${this.apiURL}${car.ID}`, car);
  }

  Create(car: Car) : Observable<Car>
  {
    return this.http.post<Car>(this.apiURL, car).pipe();
  }

  DeleteAll(): Observable<void>
  {
    return this.http.delete<void>(this.apiURL);
  }
}