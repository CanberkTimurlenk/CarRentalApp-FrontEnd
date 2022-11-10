import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from 'src/app/models/responseModels/listResponseModel';
import { Car } from 'src/app/models/car';
import { CarDetail } from 'src/app/models/carDetail';

@Injectable({
  providedIn: 'root',
})
export class CarService {

  // private apiUrl = 'https://localhost:44327/api/cars/getallcardetails ';
  private apiUrl = "https://localhost:44327/api";
  
  constructor(private httpClient: HttpClient) {}

  

  getCars(): Observable<ListResponseModel<CarDetail>> {
    // which means the function returns; Observable<T> that a subscribable CarResponseModel
    let newPath = this.apiUrl+ "/cars/getallcardetails";
    
    return this.httpClient.get<ListResponseModel<CarDetail>>( newPath );

    /*  subscribe part will be added component. 
          The structure is api call is made by service then, the component subscribe it 

      .subscribe( ( response ) => { 

        this.cars = response.data;

      } );
      */
  }

  getCarsByBrand( brandId: number ): Observable<ListResponseModel<CarDetail>> {
    
    let newPath = this.apiUrl + "/cars/getdetailsbybrand?id=" + brandId;
    
    return this.httpClient.get<ListResponseModel<CarDetail>>( newPath );
    

  }


  getCarsByColor( colorId: number ): Observable<ListResponseModel<CarDetail>> {
    
    let newPath = this.apiUrl + "/Cars/getdetailsbycolor?id=" + colorId;
    
    return this.httpClient.get<ListResponseModel<CarDetail>>( newPath );

  }

  
   getCarsByBrandAndColor(colorId:number,brandId:number):Observable<ListResponseModel<CarDetail>>{
    let newPath = this.apiUrl +"Cars/getdetailsbybrandandcolorid?brandId="+brandId+ "&colorId=" +colorId;
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath)
  }
  

  

}

