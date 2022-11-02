import { Component, OnInit } from '@angular/core';
import { Rental } from 'src/app/models/rental';
import { RentalService } from 'src/app/services/rentalService/rental.service';

@Component({
  selector: 'app-rental',
  templateUrl: './rental.component.html',
  styleUrls: ['./rental.component.css']
})
export class RentalComponent implements OnInit {

  rentals: Rental[] = []
  rentalDataLoaded: boolean = false;
  constructor(private rentalSerivece: RentalService) { }

  ngOnInit(): void {

    this.getRentals();

  }


  getRentals() {

    this.rentalSerivece.getRentals().subscribe( response => {
      this.rentals = response.data;
      this.rentalDataLoaded = true;


    })


  }

}
