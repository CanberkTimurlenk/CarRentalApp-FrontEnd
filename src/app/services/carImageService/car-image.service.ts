import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarImage } from 'src/app/models/carImage';
import { ListResponseModel } from 'src/app/models/responseModels/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarImageService {

  private apiUrl = "https://localhost:44327/api"

  constructor(private httpClient:HttpClient) { }



  getCarImages():Observable<ListResponseModel<CarImage>> { 
    
    return this.httpClient.get<ListResponseModel<CarImage>>(this.apiUrl)
    

  }

  getCarImagesByCarId(carId:number): Observable<ListResponseModel<CarImage>> {
    
    let newPath = this.apiUrl + "/carimages/getbycarid?id=" + carId;
    console.log( newPath );
    return this.httpClient.get<ListResponseModel<CarImage>>(newPath)
  }

}
