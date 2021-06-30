import {Airlines, Airports} from '@models/Airlines';

export class Flights {
  public flightId?: number;
  public airlineId?: string;
  public airlineName?: Airlines;
  public fromLocation: Airports;
  public toLocation: Airports;
  public deptDate: Date;
  public returnDate: Date;
  public duration?: number;
  public seats?: number;
}

export class SearchFlights {
  public fromLocation: Airports;
  public toLocation: Airports;
  public deptDate: Date;
  public returnDate: Date;
}

export class FlightDetails {
  public flightId: number;
  public deptDate: Date;
  public price: number;
  public availSeats: number;
}


export const FlightHeaders = {
  flights: [
    { field: 'flightId', header: 'Flight', width: '25%'},
    { field: 'airlineName', header: 'Airline Name', width: '35%'},
    { field: 'fromLocation', header: 'From Location', width: '20%'},
    { field: 'toLocation', header: 'To Location', width: '20%' },
  ]
};
