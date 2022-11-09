import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ListResponseModel } from 'src/app/models/responseModels/listResponseModel';
import { Brand } from 'src/app/models/brand';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  private apiUrl = 'https://localhost:44327/api/brands/getall ';

  constructor(private httpClient:HttpClient) { }

  getBrands(): Observable<ListResponseModel<Brand>> {


    return this.httpClient.get<ListResponseModel<Brand>>( this.apiUrl );

  }


}
