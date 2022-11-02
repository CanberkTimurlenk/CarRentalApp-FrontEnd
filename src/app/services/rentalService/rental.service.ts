import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RentalResponseModel } from 'src/app/models/responseModels/rentalResponseModel';

@Injectable({
  providedIn: 'root'
})
export class RentalService {

  private apiUrl: string = "https://localhost:44327/api/rentals/getallrentaldetails";
  constructor(private httpClient:HttpClient) { }
  

  getRentals():Observable<RentalResponseModel> {
    
    return this.httpClient.get<RentalResponseModel>( this.apiUrl );

  }



}
