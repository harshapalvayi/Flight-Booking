import {ActionReducerMap} from '@ngrx/store';
import * as fromUser from './user-store/user.reducer'
import * as fromFlights from './flight-store/flight.reducer'

export interface AppState {
  user: fromUser.UserState;
  flight: fromFlights.FlightState;
}

export const AppReducer: ActionReducerMap<AppState> = {
    user: fromUser.userReducer,
    flight: fromFlights.flightReducer
}
