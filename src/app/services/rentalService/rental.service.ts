import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Rental } from 'src/app/models/rental';
import { ListResponseModel } from 'src/app/models/responseModels/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class RentalService {

  private apiUrl: string = "https://localhost:44327/api/rentals/getallrentaldetails";
  constructor(private httpClient:HttpClient) { }
  

  getRentals():Observable<ListResponseModel<Rental>> {
    
    return this.httpClient.get<ListResponseModel<Rental>>( this.apiUrl );

  }



}
