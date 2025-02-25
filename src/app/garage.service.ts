import { Injectable } from "@angular/core";
import { Garage } from "./garage";
import { HttpClient } from "@angular/common/http";
import { map, Observable } from "rxjs";
import { environment } from "../environment";

@Injectable({
    providedIn: 'root'
})
export class GarageService {
    private readonly apiURL = environment.apiGaragesUrl;

    constructor(private http: HttpClient) {}

    GetAll(): Observable<Garage[]> 
    {
        return this.http.get<Garage[]>(this.apiURL);
    }

    GetOne(id: string): Observable<Garage> 
    {
        return this.http.get<Garage>(this.apiURL+id);
    }

    Create(garage: Garage): Observable<Garage>
    {
       return this.http.post<Garage>(this.apiURL, garage);
    }

    Update(garage: Garage): Observable<void>
    {
        return this.http.patch<void>(`${this.apiURL}${garage.ID}`, garage);
    }

    Delete(id: string): Observable<void>
    {
        return this.http.delete<void>(this.apiURL+id);
    }

    AddCarToGarage(gid: string, cid: string): Observable<void>
    {
        return this.http.patch<void>(this.apiURL+gid+"/cars/"+cid, null);
    }   

    RemoveCarFromGarage(gid: string, cid: string): Observable<void>
    {
        return this.http.delete<void>(this.apiURL+gid+"/cars/"+cid);
    }

    DeleteAll(): Observable<void>
  {
    return this.http.delete<void>(this.apiURL);
  }
}
