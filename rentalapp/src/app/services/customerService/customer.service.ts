import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomerResponseModel } from 'src/app/models/responseModels/customerResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private apiUrl = "https://localhost:44327/api/customers/getall";

  constructor(private httpClient: HttpClient) { }


  getCustomers(): Observable<CustomerResponseModel> {
    
    return this.httpClient.get<CustomerResponseModel>( this.apiUrl );


  }
}
