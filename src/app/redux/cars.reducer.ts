import {Car} from "../car.model";
import {AddCar, CAR_ACTIONS} from "./cars.actions";

const initialState = {
  cars: [
    new Car('Ford', '12.12.12', 'Focus', false, 1),
    new Car('Audi', '09.09.12', 'A4', false, 2),
  ]
}

export function carsReducer(state = initialState, action: AddCar) {
  switch (action.type) {
    case CAR_ACTIONS.ADD_CAR:
      return {
        ...state,
        cars: [...state.cars, action.payload]
      }
    default:
      return state;
  }
}
