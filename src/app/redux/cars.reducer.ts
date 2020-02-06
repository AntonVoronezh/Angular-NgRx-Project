import {Car} from "../car.model";
import {CAR_ACTIONS, CarsActions} from "./cars.actions";

const initialState = {
  cars: []
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

    case CAR_ACTIONS.LOAD_CARS:
      return {
        ...state,
        cars: [...action.payload]
      }
    default:
      return state;
  }
}
