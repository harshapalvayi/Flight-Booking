import {Action} from '@ngrx/store';
import {Flights} from '@models/Flights';
import {Airports} from '@models/Airlines';

export const flightKey = 'flight';
export const LOAD_FLIGHTS_START = '[Flight] Load Flights start';
export const LOAD_FLIGHTS_SUCCESS = '[Flight] Load Flights Success';
export const LOAD_FLIGHTS_FAIL = '[Flight] Load Flights Fail';

export class LoadFlightsStart implements Action {
  readonly type = LOAD_FLIGHTS_START;
  constructor(public payload: {
    fromLocation: Airports;
    toLocation: Airports;
    deptDate: Date;
    returnDate: Date;
  }) {}
}

export class LoadFlightsSuccess implements Action {
  readonly type = LOAD_FLIGHTS_SUCCESS;

  constructor(public payload: {
    flights: Flights[],
    isLoading: boolean
  }) {}
}

export class LoadFlightsFail implements Action {
  readonly type = LOAD_FLIGHTS_FAIL;
  constructor(public payload: string) {}
}

export type LoadFlightActions = LoadFlightsStart
  | LoadFlightsSuccess
  | LoadFlightsFail;
