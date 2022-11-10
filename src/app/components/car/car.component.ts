import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarDetail } from 'src/app/models/carDetail';
import { CarImage } from 'src/app/models/carImage';

import { CarService } from 'src/app/services/carService/car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
})
export class CarComponent implements OnInit {
  
  cars: Car[] = []; 
  carDataLoaded: boolean = false;
  carDetails: CarDetail[]=[];
  carImage: CarImage[] = [];
  imageUrl: string = "https://localhost:44327/Uploads/images/carImages/" 
  filterText : string = "";
  
  emptyContent: boolean = false;
  
  constructor(private carService:CarService, private activatedRoute:ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe( params => {

      if ( params[ "brandId" ] ) {
        this.getCarsByBrand(params["brandId"])
      }

      else if ( params[ "colorId" ] ) {
        this.getCarsByColor( params[ "colorId" ] )
        
      }

      else if ( params[ "brandId"] && params ["colorId"] ) {
        this.getCarsByBrandAndColor( params["brandId"] , params["colorId"] )
        
      }
      
      

      else {
        this.getCars();

      }
      
    })  
  }

  getCars() {
    
    this.carService.getCars().subscribe( response => {
      
      this.carDetails = response.data;
      this.carDataLoaded = true;

    } );
    
  }


  getCarsByBrand( brandId: number ) {
    
    this.carService.getCarsByBrand( brandId ).subscribe( response => {
      
      this.carDetails = response.data;
      this.carDataLoaded = true;

    })

  }

  getCarsByColor( colorId: number ) {
    
    this.carService.getCarsByColor( colorId ).subscribe( response => {
      
      if(response.data) {
        this.carDetails = response.data;
        this.emptyContent = false;
      
      }
      
      else { 
        this.emptyContent = true;
        console.log( "emptyContent " );
        this.carDetails = null as any;
      }
      
      
      //console.log( this.emptyContent );
      this.carDataLoaded = true;

      
    } )
    
    

  }

  getCarsByBrandAndColor(brandId : number , colorId: number):void {

    this.carService.getCarsByBrandAndColor( brandId, colorId ).subscribe( response => {
      
      this.carDetails = response.data;
      this.carDataLoaded = true;


    })


    }
}
