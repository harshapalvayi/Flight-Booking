import { Injectable } from '@angular/core';
import * as moment from 'moment';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Flights, SearchFlights} from '@models/Flights';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FlightService {

  private searchFlightsForm: FormGroup | undefined;
  private addFlightsForm: FormGroup | undefined;

  constructor(private fb: FormBuilder,
              private http: HttpClient) {}

  searchFlightForm(): FormGroup {
    this.searchFlightsForm = this.fb.group({
       fromLocation: [null, [Validators.required]],
       toLocation: [null, [Validators.required]],
       deptDate: [null, [Validators.required]],
       returnDate: [null, [Validators.required]]
    });
    return this.searchFlightsForm;
  }

  addFlightForm(): FormGroup {
    this.addFlightsForm = this.fb.group({
      airlineId: [null, [Validators.required]],
      airlineName: [null, [Validators.required]],
      fromLocation: [null, [Validators.required]],
      toLocation: [null, [Validators.required]],
      deptDate: [null, [Validators.required]],
      returnDate: [null, [Validators.required]],
      seats: [null, [Validators.required]]
    });
    return this.addFlightsForm;
  }

  searchFlights(data: SearchFlights): Observable<Flights[]> {
    const fromLocation = data.fromLocation;
    const toLocation = data.toLocation;
    const deptDate = data.deptDate;
    const returnDate = data.returnDate;
    return this.http.post<any>(`/api/flights/searchFlights`, { fromLocation, toLocation, deptDate, returnDate })
      .pipe(map(flights => flights));
  }

  addFlights(data: Flights): Observable<Flights> {
    const airlineId = data.airlineId;
    const airlineName = data.airlineName;
    const fromLocation = data.fromLocation;
    const toLocation = data.toLocation;
    const seats  = data.seats;
    const deptDate = moment(data.deptDate);
    const returnDate = moment(data.returnDate);
    return this.http.post<Flights>(`/api/flights/addFlight`, {
       airlineId, airlineName, fromLocation, toLocation, deptDate, returnDate, seats
      }).pipe(map(flights => flights));
  }
}
