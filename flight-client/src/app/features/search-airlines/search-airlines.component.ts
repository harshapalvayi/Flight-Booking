import {FormBuilder, FormGroup} from '@angular/forms';
import {SelectItem} from 'primeng/api';
import {Component, OnInit, ViewChild} from '@angular/core';
import {FlightHeaders, Flights} from '@models/Flights';
import {FlightService} from '@shared/services/flight/flight.service';
import {Actions, ofType} from '@ngrx/effects';
import {select, Store} from '@ngrx/store';
import {BehaviorSubject} from 'rxjs';
import * as fromApp from '@store/app.reducer';
import * as fromFlightActions from '@store/flight-store/flight.action';
import {getFlightState} from '@store/flight-store/flight.selector';
import {UserErrorsComponent} from '@shared/templates/user-errors/user-errors.component';


@Component({
  selector: 'app-search-airlines',
  templateUrl: './search-airlines.component.html',
  styleUrls: ['./search-airlines.component.sass']
})
export class SearchAirlinesComponent implements OnInit {

  public cols: any[];
  flights: Flights[];
  ifSearched = false;
  public locations: SelectItem[] = [];
  errorMessage$: BehaviorSubject<string>;
  public searchFlightForm: FormGroup =  this.flightService.searchFlightForm();
  @ViewChild(UserErrorsComponent, {static: false}) error: UserErrorsComponent;

  constructor(private fb: FormBuilder,
              private actions$: Actions,
              private flightService: FlightService,
              private store: Store<fromApp.AppState>) {
    const { flights } = FlightHeaders;
    this.cols = flights;
    this.store.pipe(select(getFlightState)).subscribe(flights => this.flights = flights);
    this.errorMessage$ = new BehaviorSubject<string>('');
    actions$.pipe(ofType(fromFlightActions.LOAD_FLIGHTS_FAIL))
        .subscribe( error => this.error.showDialog(error));
  }

  ngOnInit() {
    this.locations = [];
    this.flightService.getLocations().subscribe(items => {
      items.forEach(item => {
        this.locations.push(this.flightService.calculateLabel(item.locations))
      })
    });
  }

  onSubmit() {
    this.ifSearched = !this.ifSearched;
    if (this.searchFlightForm.invalid) {
      return;
    }
    const fromLocation = this.searchFlightForm.value.fromLocation;
    const toLocation = this.searchFlightForm.value.toLocation;
    const deptDate = this.searchFlightForm.value.deptDate;
    const returnDate = this.searchFlightForm.value.returnDate;
    this.store.dispatch(new fromFlightActions.LoadFlightsStart(
        {
          fromLocation: fromLocation,
          toLocation: toLocation,
          deptDate: deptDate,
          returnDate: returnDate
        }));
    this.searchFlightForm.reset();
  }

}
