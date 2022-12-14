import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/models/brand';
import { BrandService } from 'src/app/services/brandService/brand.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
} )
  
  
export class BrandComponent implements OnInit {

  brands: Brand[] = [];
  brandDataLoaded: boolean = false;
  currentBrand: Brand;
  filterText = "";

  constructor(private brandService:BrandService) { }

  ngOnInit(): void {

    this.getBrands();
  }


  getBrands() {

    this.brandService.getBrands().subscribe( response => {
      
      this.brands = response.data;
      this.brandDataLoaded = true;



    })

  }

  setCurrentBrand( brand: Brand ) {
    
    this.currentBrand = brand;
    
     
  }

  getCurrentBrandClass( brand: Brand ) :string {
    
    if ( brand == this.currentBrand )
      return "list-group-item active"
    
    else {

      return "list-group-item"
      
    }


  }


  setAllBrands() {
    
    this.currentBrand = null as any;

  }

  getAllBrandsClass() :string {
    
    if ( !this.currentBrand )
      return "list-group-item active"
    
    else {

      return "list-group-item"
    }


  }


}
