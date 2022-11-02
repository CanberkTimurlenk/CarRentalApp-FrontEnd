import { Injectable } from '@angular/core';
import { Color } from 'src/app/models/color';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ColorResponseModel } from 'src/app/models/responseModels/colorResponseModel';
import { CarResponseModel } from 'src/app/models/responseModels/carResponseModel';

@Injectable({
  providedIn: 'root'
})
export class ColorService {

  colors: Color[] = [];
  
  private apiUrl = "https://localhost:44327/api/colors/getall";

  constructor( private httpClient: HttpClient ) { }
  

  getColors():Observable<ColorResponseModel> {
    
    return this.httpClient.get<ColorResponseModel>( this.apiUrl );
    

  }
}
