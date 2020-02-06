import {Component, EventEmitter, Input, Output,} from '@angular/core';
import {Car} from "../car.model";
import {Store} from "@ngrx/store";
import {AppState} from "../redux/app.state";
import {DelCar, UpdCar} from "../redux/cars.actions";

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']
})
export class CarComponent {
  @Input('car') car: Car;
  // @Output() deleteCar = new EventEmitter<Car>();

  constructor(private store: Store<AppState>) {

  }

  onDelete() {
    // this.deleteCar.emit(this.car);
    this.store.dispatch(new DelCar(this.car))
  }

  onBuy() {
    // this.car.isSold = true;
    this.store.dispatch(new UpdCar(this.car))
  }
}
