import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from 'src/app/models/customer';
import { ListResponseModel } from 'src/app/models/responseModels/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private apiUrl = "https://localhost:44327/api/customers/getall";

  constructor(private httpClient: HttpClient) { }


  getCustomers(): Observable<ListResponseModel<Customer>> {
    
    return this.httpClient.get<ListResponseModel<Customer>>( this.apiUrl );


  }
}
