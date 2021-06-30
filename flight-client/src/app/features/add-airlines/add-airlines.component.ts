import { Component, OnInit } from '@angular/core';
import {FlightHeaders, Flights} from '@models/Flights';
import {SelectItem} from 'primeng/api';
import {FormGroup} from '@angular/forms';
import {FlightService} from '@shared/services/flight/flight.service';
import {AirlinesList as airlines} from '@models/Airlines';
import {NotificationService} from '@shared/services/notification/notification.service';

@Component({
  selector: 'app-add-airlines',
  templateUrl: './add-airlines.component.html',
  styleUrls: ['./add-airlines.component.sass']
})
export class AddAirlinesComponent implements OnInit {

  public cols: any[];
  ifSearched = false;
  public locations: SelectItem[] = [];
  public airlinesList: SelectItem[] = [];
  public addFlightForm: FormGroup =  this.flightService.addFlightForm();

  constructor(private flightService: FlightService,
              private notification: NotificationService) {
    this.airlinesList = airlines;
    const { flights } = FlightHeaders;
    this.cols = flights;
  }

  ngOnInit() {
    this.locations = [];
    this.flightService.getLocations().subscribe(items => {
      items.forEach(item => {
        this.locations.push(this.flightService.calculateLabel(item.locations));
      });
    });

    this.flightService.getAirlines().subscribe(airlines => {
      airlines.forEach(airline => {
        this.airlinesList.push({label: airline.airlines, value: airline.value});
      });
    });
  }

  onSubmit(): void {
    this.ifSearched = !this.ifSearched;
    const seats  = this.addFlightForm.value.seats;
    const deptDate = this.addFlightForm.value.deptDate;
    const airlineId = this.addFlightForm.value.airlineId;
    const toLocation = this.addFlightForm.value.toLocation;
    const returnDate = this.addFlightForm.value.returnDate;
    const airlineName = this.addFlightForm.value.airlineName;
    const fromLocation = this.addFlightForm.value.fromLocation;
    const flightData: Flights = {airlineId, airlineName, fromLocation, toLocation, seats, deptDate, returnDate};
    this.flightService.addFlights(flightData).subscribe(() => {
      this.addFlightForm.reset();
      const toastDetails = {
        message: 'Success',
        details: 'flight added Successfully'
      };
      this.notification.showSuccess(toastDetails);
    }, error => {
      const toastDetails = {
        message: 'Error',
        details: 'Unable to added flight'
      };
      this.notification.showSuccess(toastDetails);
      console.log('error', error);
    });
  }

}
