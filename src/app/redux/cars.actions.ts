import {Action} from "@ngrx/store";

import {Car} from "../car.model";

export namespace CAR_ACTIONS {
  export const ADD_CAR = 'ADD_CAR';
  export const DEL_CAR = 'DEL_CAR';
  export const UPD_CAR = 'UPD_CAR';
}

export class AddCar implements Action {
  readonly type = CAR_ACTIONS.ADD_CAR;

  constructor(public payload: Car) {
  }
}

export class DelCar implements Action {
  readonly type = CAR_ACTIONS.DEL_CAR;

  constructor(public payload: Car) {
  }
}

export class UpdCar implements Action {
  readonly type = CAR_ACTIONS.UPD_CAR;

  constructor(public payload: Car) {
  }
}

export type CarsActions = AddCar | DelCar | UpdCar;

