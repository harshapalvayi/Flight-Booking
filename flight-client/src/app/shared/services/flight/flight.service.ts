import { Injectable } from '@angular/core';
import * as moment from 'moment';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Flights, SearchFlights} from '@models/Flights';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Airlines, Airports} from "@models/Airlines";

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

  calculateLabel(label: string) {
    let result = null;
    switch (label) {
      case 'BOM':
        result =  { label: 'BOM - Mumbai Airport', value: Airports.BOM };
        break;
      case 'CVG':
        result =  { label: 'CVG - Cincinnati Airport', value: Airports.CVG };
        break;
      case 'HYD':
        result = { label: 'HYD - Hyderabad Airport', value: Airports.HYD };
        break;
      case 'DEL':
        result = { label: 'DEL - Delhi Airport', value: Airports.DEL };
        break;
      case 'CAL':
        result = { label: 'CAL - California Airport', value: Airports.CAL };
        break;
    }
    return result;
  }

  searchFlights(data: SearchFlights): Observable<Flights[]> {
    const fromLocation = data.fromLocation;
    const toLocation = data.toLocation;
    const deptDate = data.deptDate;
    const returnDate = data.returnDate;
    return this.http.post<any>(`/api/flights/searchFlights`,
        { fromLocation, toLocation, deptDate, returnDate })
      .pipe(map(flights => flights));
  }

  addFlights(data: Flights): Observable<Flights> {
    return this.http.post<Flights>(`/api/flights/addFlight`, data)
        .pipe(map(flights => flights));
  }

  getLocations(): Observable<any> {
    return this.http.get<any>(`/api/flights/locations`,
    ).pipe(map(locations => locations));
  }

  getAirlines(): Observable<any> {
    return this.http.get<any>(`/api/flights/airlines`,).pipe(map(airlines => airlines));
  }

  getAllFlights(): Observable<any> {
    return this.http.get<Flights[]>(`/api/flights/all`).pipe(flights => flights);
  }
}
