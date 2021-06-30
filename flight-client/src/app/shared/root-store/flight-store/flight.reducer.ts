import {Flights} from '@models/Flights';
import * as fromLoadFlightsActions from '@store/flight-store/flight.action';

export interface FlightState {
  flights: Flights[];
  error: string;
  isLoading: boolean;
}

const initialState: FlightState = {
  flights: null,
  error: null,
  isLoading: true
};

export function flightReducer(state = initialState,
                              action: fromLoadFlightsActions.LoadFlightActions) {
  switch (action.type) {
    case fromLoadFlightsActions.LOAD_FLIGHTS_START:
      return {
        ...state,
        error: null,
        isLoading: true
      };
    case fromLoadFlightsActions.LOAD_FLIGHTS_SUCCESS:
         return {
           ...state,
           flights: action.payload.flights,
           isLoading: action.payload.isLoading,
           error: null
         };
    case fromLoadFlightsActions.LOAD_FLIGHTS_FAIL:
      return {
        ...state,
        error: action.payload,
        isLoading: false
      }
    default: return state;
  }
}

export const getFlights = (state: FlightState) => state.flights;
export const isFlightsLoading = (state: FlightState) => state.isLoading;
