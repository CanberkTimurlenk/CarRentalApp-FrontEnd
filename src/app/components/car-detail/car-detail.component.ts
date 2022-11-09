import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarDetail } from 'src/app/models/carDetail';
import { CarImage } from 'src/app/models/carImage';
import { CarDetailService } from 'src/app/services/carDetailService/car-detail.service';
import { CarImageService } from 'src/app/services/carImageService/car-image.service';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {

  carDetails: CarDetail[]=[];
  carImages: CarImage[] = [];
  imageLoaded:boolean=false;

  constructor(
    private carDetailService: CarDetailService,
    private carImageService: CarImageService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
      this.activatedRoute.params.subscribe(params => {
        if(params["carId"]){
          this.getCarDetails(params["carId"])
          this.getCarImages(params["carId"])
        }
      })

  }

  getCarDetails(carId: number) {
    this.carDetailService.getCarDetail(carId).subscribe((response) => {
      this.carDetails =response.data;
    });
  }

  getCarImages(carId: number) {
    this.carImageService.getCarImagesByCarId( carId ).subscribe( ( response ) => {
      console.log(response);
      this.carImages=response.data;
    });
  }

  getImageSource(image:CarImage):string{
    let url: string = "https://localhost:44327/Uploads/images/carImages/" + image.imagePath
    
    console.log(image.imagePath)
    return url
  }

  getImageClass(){
    if(this.imageLoaded==false){
      return 'carousel-item active';
    }else{
      return 'carousel-item'
    }
  }

  
}