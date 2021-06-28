import { Injectable } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {map} from 'rxjs/operators';
import {BehaviorSubject, Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Flights} from '@models/Flights';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class FlightService {

  private flights: BehaviorSubject<Flights>;
  flightInfo: Observable<Flights>;
  private searchForm: FormGroup | undefined;
  private addForm: FormGroup | undefined;

  constructor(private fb: FormBuilder,
              private http: HttpClient) {
    this.flights = new BehaviorSubject<Flights>(JSON.parse(localStorage.getItem('flights')));
    this.flightInfo = this.flights.asObservable();
  }

  getFlights(): Flights {
    return this.flights.value;
  }

  setFlights(flight: Flights): void {
    this.flights.next(flight);
  }

  searchFlightForm(): FormGroup {
    this.searchForm = this.fb.group({
       fromLocation: [null, [Validators.required]],
       toLocation: [null, [Validators.required]],
       deptDate: [null, [Validators.required]],
       arvlDate: [null, [Validators.required]]
    });
    return this.searchForm;
  }

  addFlightForm(): FormGroup {
    this.addForm = this.fb.group({
      airlineId: [null, [Validators.required]],
      airlineName: [null, [Validators.required]],
      fromLocation: [null, [Validators.required]],
      toLocation: [null, [Validators.required]],
      deptDate: [null, [Validators.required]],
      arvlDate: [null, [Validators.required]],
      duration: [null, [Validators.required]],
      seats: [null, [Validators.required]]
    });
    return this.addForm;
  }

  searchFlights(data: Flights): Observable<Flights[]> {
    const fromLocation = data.fromLocation;
    const toLocation = data.toLocation;
    const deptDate = data.deptTime;
    const arvlDate = data.arvlTime;
    return this.http.post<any>(`/api/flights/searchFlights`, { fromLocation, toLocation, deptDate, arvlDate })
      .pipe(map(fts => {
  // store flight list details and jwt token in local storage to keep user logged in between page refreshes
      this.saveFlightsToStorage(fts);
      return fts;
    }));
  }

  private saveFlightsToStorage(flights: Flights[]): void {
    window.localStorage.setItem('flights', JSON.stringify(flights));
  }

  addFlights(data: Flights): Observable<Flights> {
    const airlineId = data.airlineId;
    const airlineName = data.airlineName;
    const duration = data.duration;
    const seats  = data.seats;
    const fromLocation = data.fromLocation;
    const toLocation = data.toLocation;
    const deptDate = moment(data.deptTime);
    const arvlDate = moment(data.arvlTime);
    return this.http.post<any>(`/api/flights/addFlight`, {
       airlineId, airlineName, fromLocation, toLocation, deptDate, arvlDate, duration, seats
      })
      .pipe(map(fts => {
        // store flight list details and jwt token in local storage to keep user logged in between page refreshes
        this.saveFlightsToStorage(fts);
        return fts;
      }));
  }

  getAllFlights(): Observable<Flights[]> {
    return this.http.get<any>('/api/flights/all')
      .pipe(map (fts => {
        this.saveFlightsToStorage(fts);
        return fts;
      }));
  }
}
