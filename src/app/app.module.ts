import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {StoreModule} from "@ngrx/store";

import { CarsFormComponent } from './cars-form/cars-form.component';
import { AppComponent } from './app.component';
import { CarComponent } from './car/car.component';
import {carsReducer} from "./redux/cars.reducer";

@NgModule({
  declarations: [
    AppComponent,
    CarsFormComponent,
    CarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forRoot({carPage: carsReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
