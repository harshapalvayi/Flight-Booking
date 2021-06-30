import {Component, OnInit} from '@angular/core';
import {FlightHeaders, Flights} from '@models/Flights';
import {FlightService} from '@shared/services/flight/flight.service';

@Component({
  selector: 'app-manage-airlines',
  templateUrl: './manage-airlines.component.html',
  styleUrls: ['./manage-airlines.component.sass']
})
export class ManageAirlinesComponent implements OnInit {

  public cols: any[];
  flightList: Flights[];

  constructor(private flightService: FlightService) {
    const { flights } = FlightHeaders;
    this.cols = flights;
  }

  ngOnInit() {
    this.flightList = [];
    this.flightService.getAllFlights().subscribe(flights => {
      this.flightList = flights;
    });
  }

}
