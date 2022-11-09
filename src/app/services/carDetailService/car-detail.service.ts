import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarDetail } from 'src/app/models/carDetail';
import { ListResponseModel } from 'src/app/models/responseModels/listResponseModel';

@Injectable({
  providedIn: 'root',
})
export class CarDetailService {
  apiUrl: string = 'https://localhost:44327/api/Cars/getdetailsbycarid?carId=';
  constructor(private httpClient: HttpClient) {}

  getCarDetail(carId: number): Observable<ListResponseModel<CarDetail>> {
    let newPath: string = this.apiUrl + carId;
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }
}
