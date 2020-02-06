import {Injectable} from "@angular/core";
import {Actions, Effect, ofType} from "@ngrx/effects";
import {mergeMap, switchMap} from "rxjs/operators";

import {AddCar, CAR_ACTIONS} from "./cars.actions";
import {Car} from "../car.model";
import {CarsService} from "../cars.service";

@Injectable()
export class CarsEffect {


  constructor(private actions$: Actions, private service: CarsService) {
  }

  @Effect() loadCars = this.actions$
    .pipe(
      ofType(CAR_ACTIONS.ADD_CAR),
      switchMap((action: AddCar) => {
        return this.service.preloadCars()
      }),
      mergeMap((cars: Car[]) => {
        return {
          type: CAR_ACTIONS.ADD_CAR,
          payload: cars
        }
      })
    )
}
