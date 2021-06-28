import {FlightHeaders, Flights} from '@models/Flights';
import { Component, OnInit } from '@angular/core';
import {FormGroup} from '@angular/forms';
import {FlightService} from '@shared/services/flight/flight.service';
import {SelectItem} from 'primeng/api';
import {AirportList as airports} from '@models/Airlines';
import {AirlinesList as airlines} from '@models/Airlines';

@Component({
  selector: 'app-manage-airlines',
  templateUrl: './manage-airlines.component.html',
  styleUrls: ['./manage-airlines.component.sass']
})
export class ManageAirlinesComponent implements OnInit {

  public cols: any[];
  flightList: Flights[];
  ifSearched = false;
  public locations: SelectItem[] = [];
  public airlinesList: SelectItem[] = [];

  constructor(private flightService: FlightService) {
    this.locations = airports;
    this.airlinesList = airlines;
    const { flights } = FlightHeaders;
    this.cols = flights;
  }

  public addFlight: FormGroup =  this.flightService.addFlightForm();

  ngOnInit(): void {}

  onSubmit(): void {
    const flightData = this.addFlight.getRawValue();
    this.flightService.addFlights(flightData).subscribe(() => {
      this.getAllFlights();
      this.addFlight.reset();
    }, error => {
      console.log('error', error);
      this.ifSearched = false;
    });
  }

  getAllFlights(): void {
    this.flightService.getAllFlights().subscribe(list => {
      this.ifSearched = true;
      this.flightList = list;
    });
  }

}
