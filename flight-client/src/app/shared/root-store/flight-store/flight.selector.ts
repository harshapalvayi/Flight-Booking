import {createFeatureSelector, createSelector} from '@ngrx/store';
import * as fromFlightsReducer from '@store/flight-store/flight.reducer';
import {flightKey} from '@store/flight-store/flight.action';
import {FlightState} from '@store/flight-store/flight.reducer';

export const getFlightKey = createFeatureSelector<FlightState>(flightKey);

export const getFlightState = createSelector(getFlightKey,
    fromFlightsReducer.getFlights);

export const isFlightsLoaded = createSelector(getFlightKey,
  fromFlightsReducer.isFlightsLoading);
