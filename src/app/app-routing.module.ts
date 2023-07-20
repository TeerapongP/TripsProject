import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TravelHomeComponent } from './travel-home/travel-home.component';
import { IndexComponent } from './index/index.component';
import { CheckoutComComponent } from './checkout-com/checkout-com.component';


const routes: Routes = [
  // { path: 'travel', component: TravelHomeComponent },
  // { path: 'checkout/:id', component: CheckoutComComponent },
  { path: '', component: TravelHomeComponent },

]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

