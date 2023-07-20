import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { TravelHomeComponent } from './travel-home/travel-home.component';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ServiceService } from './travel-home/service/service.service';


@NgModule({
  declarations: [AppComponent, TravelHomeComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, ReactiveFormsModule],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
