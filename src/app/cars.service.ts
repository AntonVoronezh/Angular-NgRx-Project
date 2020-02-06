import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Store} from "@ngrx/store";
import {map} from "rxjs/operators";

import {AppState} from "./redux/app.state";
import {Car, Cars} from "./car.model";
import {AddCar, DelCar, LoadCar, UpdCar} from "./redux/cars.actions";
import {Observable} from "rxjs";

class Card {
}

@Injectable()
export class CarsService {
  static baseUrl: string = 'http://localhost:3000';

  constructor(private http: HttpClient, private store: Store<AppState>) {
  }

  preloadCars(): Observable<Car[]> {
    return this.http.get<Car[]>(`${CarsService.baseUrl}/cars`)

  }

  loadCars(): void {
    this.preloadCars()
      .pipe(map(c => this.store.dispatch(new LoadCar(c))))
      .subscribe()
  }

  addCar(car: Car) {
    this.http.post<Car>(`${CarsService.baseUrl}/cars`, car)
      .pipe(map(c => this.store.dispatch(new AddCar(c))))
      .subscribe()
  }

  updCar(car: Car) {
    this.http.put<Car>(`${CarsService.baseUrl}/cars/${car.id}`, car)
      .pipe(map(c => this.store.dispatch(new UpdCar(c))))
      .subscribe()
  }

  delCar(car: Car): void {
    this.http.delete<Car>(`${CarsService.baseUrl}/cars/${car.id}`)
      .pipe(map(c => this.store.dispatch(new DelCar(c))))
      .subscribe()
  }


}
