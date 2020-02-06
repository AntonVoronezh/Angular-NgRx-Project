import {Car} from "../car.model";
import {CAR_ACTIONS, CarsActions} from "./cars.actions";

const initialState = {
  cars: [
    new Car('Ford', '12.12.12', 'Focus', false, 1),
    new Car('Audi', '09.09.12', 'A4', false, 2),
  ]
}

export function carsReducer(state = initialState, action: CarsActions) {
  switch (action.type) {
    case CAR_ACTIONS.ADD_CAR:
      return {
        ...state,
        cars: [...state.cars, action.payload]
      }
    case CAR_ACTIONS.DEL_CAR:
      return {
        ...state,
        cars: [
          ...state.cars.filter(c => c.id !== action.payload.id)
        ]
      }
    case CAR_ACTIONS.UPD_CAR:
      const idx = state.cars.findIndex(c => c.id === action.payload.id);
      state.cars[idx].isSold = true;

      return {
        ...state,
        cars: [...state.cars]
      }
    default:
      return state;
  }
}
