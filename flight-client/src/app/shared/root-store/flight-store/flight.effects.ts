import { of } from 'rxjs';
import { Router } from '@angular/router';
import {Flights} from '@models/Flights';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Actions, ofType, Effect } from '@ngrx/effects';
import { switchMap, catchError, map } from 'rxjs/operators';
import * as fromFlightsActions from '@store/flight-store/flight.action';
import {FlightService} from '@shared/services/flight/flight.service';

const handleLoadFlights = (flightList: Flights[]) => {
  return new fromFlightsActions.LoadFlightsSuccess({
      flights: flightList,
      isLoading: false
  });
};

const handleLoadFlightsError = (errorRes: any) => {
  let errorMessage = 'An unknown error occurred!';
  if (!errorRes.error || !errorRes.error.message) {
    return of(new fromFlightsActions.LoadFlightsFail(errorMessage));
  }
  return of(new fromFlightsActions.LoadFlightsFail('No flights available.'));
};


@Injectable()
export class FlightEffects {

  constructor(
    private router: Router,
    private actions$: Actions,
    private http: HttpClient,
    private flightService: FlightService
  ) {}

 @Effect()
  loadFlights = this.actions$.pipe(
    ofType(fromFlightsActions.LOAD_FLIGHTS_START),
    switchMap((flights: fromFlightsActions.LoadFlightsStart) => {
      return this.flightService.searchFlights(flights.payload)
        .pipe(
          map(resData => {
            return handleLoadFlights(resData);
          }),
          catchError(errorRes => {
            return handleLoadFlightsError(errorRes);
          })
        );
    })
  );

}
