import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {StoreModule} from "@ngrx/store";
import {HttpClientModule} from "@angular/common/http";
import {EffectsModule} from "@ngrx/effects";

import { CarsFormComponent } from './cars-form/cars-form.component';
import { AppComponent } from './app.component';
import { CarComponent } from './car/car.component';
import {carsReducer} from "./redux/cars.reducer";
import {CarsService} from "./cars.service";
import {CarsEffect} from "./redux/cars.effect";

@NgModule({
  declarations: [
    AppComponent,
    CarsFormComponent,
    CarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    EffectsModule.forRoot([CarsEffect]),
    StoreModule.forRoot({carPage: carsReducer}),
    HttpClientModule
  ],
  providers: [CarsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
