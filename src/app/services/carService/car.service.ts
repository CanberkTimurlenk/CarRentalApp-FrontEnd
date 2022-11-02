import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CarResponseModel } from 'src/app/models/responseModels/carResponseModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CarService {

  private apiUrl = 'https://localhost:44327/api/cars/getallcardetails ';

  constructor(private httpClient: HttpClient) {}

  

  getCars(): Observable<CarResponseModel> {
    // which means the function returns; Observable<T> that a subscribable CarResponseModel

    return this.httpClient.get<CarResponseModel>( this.apiUrl );

    /*  subscribe part will be added component. 
          The structure is api call is made by service then, the component subscribe it 

      .subscribe( ( response ) => { 

        this.cars = response.data;

      } );
      */
  }
}

