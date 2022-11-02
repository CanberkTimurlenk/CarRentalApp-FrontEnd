import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BrandResponseModel } from 'src/app/models/responseModels/brandResponseModel';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  private apiUrl = 'https://localhost:44327/api/brands/getall ';

  constructor(private httpClient:HttpClient) { }

  getBrands(): Observable<BrandResponseModel> {


    return this.httpClient.get<BrandResponseModel>( this.apiUrl );

  }


}
