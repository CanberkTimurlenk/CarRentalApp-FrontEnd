import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/customer';
import { CustomerService } from 'src/app/services/customerService/customer.service';


@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  customers: Customer[] = [];
  customerDataLoaded : boolean = false;

  constructor(private customerService:CustomerService) { }

  ngOnInit(): void {

    this.getCustomers();
  }


  getCustomers() {

    this.customerService.getCustomers().subscribe( response => {
      
      this.customers = response.data;
      this.customerDataLoaded = true;


    } );

  }
}
