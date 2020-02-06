import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Store} from "@ngrx/store";
import {map} from "rxjs/operators";

import {AppState} from "./redux/app.state";
import {Car, Cars} from "./car.model";
import {LoadCar} from "./redux/cars.actions";

class Card {
}

@Injectable()
export class CarsService {
  static baseUrl: string = 'http://localhost:3000';

  constructor(private http: HttpClient, private store: Store<AppState>) {
  }

  loadCars(): void {
    this.http.get<Car[]>(`${CarsService.baseUrl}/cars`)
      .pipe(map(c => this.store.dispatch(new LoadCar(c))))
      .subscribe()
  }
}
