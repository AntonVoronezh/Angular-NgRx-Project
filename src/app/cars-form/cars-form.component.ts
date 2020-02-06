import {Component, OnInit} from '@angular/core';
import * as moment from "moment";

import {Car} from "../car.model";
import {Store} from "@ngrx/store";
import {AppState} from "../redux/app.state";
import {AddCar} from "../redux/cars.actions";

@Component({
  selector: 'app-cars-form',
  templateUrl: './cars-form.component.html',
  styleUrls: ['./cars-form.component.scss']
})
export class CarsFormComponent implements OnInit {
  carName: string = '';
  carModel: string = '';
  private id: number = 2;

  // @Output() addCar = new EventEmitter<Car>();

  constructor(private store: Store<AppState>) {
  }

  ngOnInit() {
  }

  onAdd() {
    if (this.carName === '' || this.carModel === '') {
      return;
    }

    this.id = ++this.id;

    const car = new Car(
      this.carName,
      moment().format('DD.MM.YYYY'),
      this.carModel,
      false,
      this.id
    )

    this.carModel = '';
    this.carName = '';
    // this.addCar.emit(car);

    this.store.dispatch(new AddCar(car));
  }

  onLoad() {

  }
}
