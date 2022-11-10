import { Pipe, PipeTransform } from '@angular/core';
import { Car } from 'src/app/models/car';
import { CarDetail } from 'src/app/models/carDetail';

@Pipe({
  name: 'carFilterPipe'
})
export class CarFilterPipePipe implements PipeTransform {

   transform( value: CarDetail[], filterText: string ): CarDetail[] {   // gets a carDetail raw data then filter it
    
     
    filterText = filterText ? filterText.toLocaleLowerCase() : ""
    return filterText ? value.filter( ( c: CarDetail ) => c.modelName.toLocaleLowerCase().indexOf( filterText ) !== -1 )
      : value
      

    

  }

}
