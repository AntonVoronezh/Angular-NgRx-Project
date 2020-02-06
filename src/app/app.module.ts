import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {StoreModule} from "@ngrx/store";

import { CarsFormComponent } from './cars-form/cars-form.component';
import { AppComponent } from './app.component';
import { CarComponent } from './car/car.component';
import {carsReducer} from "./redux/cars.reducer";
import {CarsService} from "./cars.service";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    CarsFormComponent,
    CarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forRoot({carPage: carsReducer}),
    HttpClientModule
  ],
  providers: [CarsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
