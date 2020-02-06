import {Component, OnInit} from '@angular/core';
import * as moment from "moment";

import {Car} from "../car.model";
import {Store} from "@ngrx/store";
import {AppState} from "../redux/app.state";
import {AddCar} from "../redux/cars.actions";
import {CarsService} from "../cars.service";

@Component({
  selector: 'app-cars-form',
  templateUrl: './cars-form.component.html',
  styleUrls: ['./cars-form.component.scss']
})
export class CarsFormComponent implements OnInit {
  carName: string = '';
  carModel: string = '';
  // private id: number = 2;

  // @Output() addCar = new EventEmitter<Car>();

  constructor(private store: Store<AppState>, private servise: CarsService) {
  }

  ngOnInit() {

  }

  onAdd() {
    if (this.carName === '' || this.carModel === '') {
      return;
    }

    const car = new Car(
      this.carName,
      moment().format('DD.MM.YYYY'),
      this.carModel,
      false,
    )

    this.carModel = '';
    this.carName = '';
    // this.addCar.emit(car);

    // this.store.dispatch(new AddCar(car));
    this.servise.addCar(car);
  }

  onLoad() {
    this.servise.loadCars()
  }
}
