import {FlightHeaders, Flights} from '@models/Flights';
import { Component } from '@angular/core';
import {FormGroup} from '@angular/forms';
import {FlightService} from '@shared/services/flight/flight.service';
import {SelectItem} from 'primeng/api';
import {AirportList as airports} from '@models/Airlines';
import {AirlinesList as airlines} from '@models/Airlines';
import {select, Store} from '@ngrx/store';
import * as fromApp from '@store/app.reducer';
import {getFlightState} from "@store/flight-store/flight.selector";

@Component({
  selector: 'app-manage-airlines',
  templateUrl: './manage-airlines.component.html',
  styleUrls: ['./manage-airlines.component.sass']
})
export class ManageAirlinesComponent {

  public cols: any[];
  ifSearched = false;
  flightList: Flights[];
  public locations: SelectItem[] = [];
  public airlinesList: SelectItem[] = [];
  public addFlightForm: FormGroup =  this.flightService.addFlightForm();

  constructor(private flightService: FlightService,
              private store: Store<fromApp.AppState>) {
    this.locations = airports;
    this.airlinesList = airlines;
    const { flights } = FlightHeaders;
    this.cols = flights;
    this.store.pipe(select(getFlightState)).subscribe(flights => this.flightList = flights);
  }

  onSubmit(): void {
    this.ifSearched = !this.ifSearched;
    const flightData = this.addFlightForm.getRawValue();
    this.flightService.addFlights(flightData).subscribe(() => {
      this.addFlightForm.reset();
    }, error => {
      console.log('error', error);
    });
  }

}
