import { Injectable } from '@angular/core';
import { Color } from 'src/app/models/color';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from 'src/app/models/responseModels/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class ColorService {

  colors: Color[] = [];
  
  private apiUrl = "https://localhost:44327/api/colors/getall";

  constructor( private httpClient: HttpClient ) { }
  

  getColors():Observable<ListResponseModel<Color>> {
    
    return this.httpClient.get<ListResponseModel<Color>>( this.apiUrl );
    

  }
}
