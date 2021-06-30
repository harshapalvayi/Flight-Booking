import {User} from '@models/User';
import {Injectable} from '@angular/core';
import {from, Observable, of, throwError} from 'rxjs';
import {AccountType} from '@models/AccountType';
import {delay, dematerialize, materialize, mergeMap} from 'rxjs/operators';
import {HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Flights} from '@models/Flights';
import {Airlines, Airports} from '@models/Airlines';

// let users = JSON.parse(localStorage.getItem('users') as string) || [];

const users: User[] = [
  {
    userid: 1,
    username: 'user',
    password: 'user@123',
    email: 'User@gmail.com',
    accountType: AccountType.USER
  },
  {
    userid: 2,
    username: 'admin',
    password: 'admin@123',
    email: 'Admin@gmail.com',
    accountType: AccountType.ADMIN
  }
  ];

const today = new Date();
const tomorrow = new Date(today.getDate() + 1);
const flights: Flights[] = [
  {
    flightId: 14253,
    airlineId: 'AI12',
    airlineName: Airlines.AIR_INDIA,
    fromLocation: Airports.DEL,
    toLocation: Airports.HYD,
    deptDate: today,
    returnDate:  tomorrow
  },
  { flightId: 2353,
    airlineId: 'AA23',
    airlineName: Airlines.AMERICAN_AIRLINES,
    fromLocation: Airports.CVG,
    toLocation: Airports.HYD,
    deptDate: today,
    returnDate:  tomorrow
  }
];

@Injectable()
export class FakeBackendInterceptors implements HttpInterceptor {

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const {url, method, headers, body} = request;

/*    const handleRoute = (): Observable<HttpEvent<any>> => {
      switch (true) {
        case url.endsWith('/api/user/authenticate') && method === 'POST':
          return authenticate();
        case url.endsWith('/api/user/register') && method === 'POST':
          return register();
        case url.endsWith('/user') && method === 'GET':
          return getUsers();
        case url.endsWith('/api/flights/searchFlights') && method === 'POST':
          return getFlights();
        case url.endsWith('/api/flights/addFlight') && method === 'POST':
          return addFlights();
        case url.endsWith('/api/flights/all') && method === 'GET':
            return getAllFlights();
        default:
          // pass through any requests not handled above
          return next.handle(request);
      }
    };*/

    const getFlights = (): Observable<HttpResponse<any>> => {
      const {fromLocation, toLocation } = body;
      const flightList: Flights[] = [];
      flights.forEach(ft => {
        if (ft.fromLocation === fromLocation && ft.toLocation === toLocation) {
          flightList.push(ft);
        }
      });
      if (flightList.length === 0) { return error('No active flight available'); }
      localStorage.setItem('flights', JSON.stringify(flightList));
      return ok(flightList);
    };

    const getAllFlights = (): Observable<HttpResponse<any>> => {
      // localStorage.setItem('flights', JSON.stringify(flights));
      return ok(flights);
    };


    const addFlights = ()  => {
      const flight = body;

      if (flight.find((x: { flightId: number; airlineId: string; }) => x.flightId === flight.flightId &&
        x.airlineId === flight.airlineId)) {
        return error(`Airline  ${flight.airlineId}  is already exits`);
      }

      flight.flightId = flights.length ? Math.max(...flight.map((x: { flightId: number; }) => x.flightId)) + 1 : 1;
      flights.push(flight);
      localStorage.setItem('flights', JSON.stringify(flights));
      return ok(flights);
    };

    const authenticate = (): Observable<HttpResponse<any>> => {
      const {username, password} = body;
      const user = users.find((x: { username: any; password: any; }) => x.username === username && x.password === password);
      if (!user) { return error('Username or password is incorrect'); }
      return ok({
        userid: user.userid,
        username: user.username,
        email: user.email,
        accountType: user.accountType,
        token: 'fake-jwt-token'
      });
    };

    const register = () => {
      const user = body;

      if (users.find((x: { username: any; }) => x.username === user.username)) {
        return error(`Username   ${user.username}  is already taken`);
      }

      user.userid = users.length ? Math.max(...users.map((x: { userid: any; }) => x.userid)) + 1 : 1;
      users.push(user);
      localStorage.setItem('users', JSON.stringify(users));
      localStorage.setItem('user', JSON.stringify(user));

      return ok({
        userid: user.userid,
        username: user.username,
        email: user.email,
        accountType: user.accountType,
        token: 'fake-jwt-token'
      });
    };

    const getUsers = (): Observable<HttpResponse<any>> => {
      if (!isLoggedIn()) { return unauthorized(); }
      return ok(users);
    };

    // helper functions

    // tslint:disable-next-line:no-shadowed-variable
    const ok = (body?: any) => of(new HttpResponse({status: 200, body}));

    // tslint:disable-next-line:typedef
    const error = (message: string) => throwError({error: {message}});

    // tslint:disable-next-line:typedef
    const unauthorized = () => throwError({status: 401, error: {message: 'Unauthorised'}});

    // tslint:disable-next-line:typedef
    const isLoggedIn = () => headers.get('Authorization') === 'Bearer fake-jwt-token';

    // wrap in delayed observable to simulate server api call
    return of(null)
    //  .pipe(mergeMap(handleRoute))
      .pipe(materialize()) // call materialize and dematerialize to ensure delay even if an error is thrown
      .pipe(delay(500))
      .pipe(dematerialize());
  }
}

export const fakeBackendProvider = {
  // use fake backend in place of Http service for backend-less development
  provide: HTTP_INTERCEPTORS,
  useClass: FakeBackendInterceptors,
  multi: true
};
