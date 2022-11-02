import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/models/car';

import { CarResponseModel } from 'src/app/models/responseModels/carResponseModel';
import { CarService } from 'src/app/services/carService/car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
})
export class CarComponent implements OnInit {
  
  cars: Car[] = []; 
  carDataLoaded: boolean = false;
  
  constructor(private carService:CarService) {}

  ngOnInit(): void {
    this.getCars();


  }

  getCars() {
    
    this.carService.getCars().subscribe( response => {
      
      this.cars = response.data;
      this.carDataLoaded = true;

    });
    


  }
}
