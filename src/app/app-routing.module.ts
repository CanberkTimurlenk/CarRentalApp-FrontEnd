import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { CarComponent } from './components/car/car.component';

const routes: Routes = [
  { path: "", pathMatch: "full", component: CarComponent },
  {path:"cars", component: CarComponent},
  { path: "brands",component: CarComponent },
  { path: "colors", component: CarComponent },
  { path: "cars/brand/:brandId", component: CarComponent },
  { path: "cars/color/:colorId", component: CarComponent },
  { path: "cars/color/:colorId/brand/:brandId", component: CarComponent },
  { path:"cars/cardetail/:carId",component:CarDetailComponent}

/*
  { path: "cars/brand/:brandId/color:colorId", component: CarComponent },


*/
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
