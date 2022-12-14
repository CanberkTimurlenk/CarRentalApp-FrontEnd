import { Component, OnInit } from '@angular/core';
import { Color } from 'src/app/models/color';
import { ColorService } from 'src/app/services/colorService/color.service';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {

  colors: Color[] = [];
  colorDataLoaded: boolean = false;
  currentColor: Color;
  filterText: string = "";

  constructor(private colorService:ColorService) { }

  ngOnInit(): void {
  
    this.getColors();
  }

  getColors() {
    

    this.colorService.getColors().subscribe( response => {
      
      
      this.colors = response.data;
      this.colorDataLoaded = true;

    })

  }

    setCurrentColor( color: Color ) {
    
    this.currentColor = color;
     
  }

  getCurrentColorClass( color: Color ) :string {
    
    if ( color == this.currentColor )
      return "list-group-item active"
    
    else {

      return "list-group-item"
      
    }


  }


  setAllColors() {
    
    this.currentColor = null as any;

  }

  getAllColorsClass() :string {
    
    if ( !this.currentColor )
      return "list-group-item active"
    
    else {

      return "list-group-item"
    }


  }


}
