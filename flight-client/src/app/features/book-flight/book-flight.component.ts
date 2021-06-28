import {FormGroup} from '@angular/forms';
import {SelectItem} from 'primeng/api';
import { Component, OnInit } from '@angular/core';
import {AirportList as airports} from '@models/Airlines';
import {FlightService} from '@shared/services/flight/flight.service';
import {FlightHeaders, Flights} from '@models/Flights';

@Component({
  selector: 'app-book-flight',
  templateUrl: './book-flight.component.html',
  styleUrls: ['./book-flight.component.sass']
})
export class BookFlightComponent implements OnInit {

  public cols: any[];
  flights: Flights[];
  ifSearched = false;
  public locations: SelectItem[] = [];

  constructor(private flightService: FlightService) {
    this.locations = airports;
    const { flights } = FlightHeaders;
    this.cols = flights;
  }

  public searchFlight: FormGroup =  this.flightService.searchFlightForm();

  ngOnInit(): void {}

  onSubmit(): void {
    const searchData = this.searchFlight.getRawValue();
    this.flightService.searchFlights(searchData).subscribe(data => {
        this.ifSearched = true;
        this.flights = data;
        this.searchFlight.reset();
      }, error => {
        console.log('error', error);
        this.ifSearched = false;
    });
  }


}
