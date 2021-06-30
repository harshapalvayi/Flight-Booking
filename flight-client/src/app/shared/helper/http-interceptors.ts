import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {SessionService} from '../services/session/session.service';
import {AppState} from '@store/app.reducer';
import {select, Store} from '@ngrx/store';
import {getUserState} from '@store/user-store/user.selector';
import {User} from '@models/User';

@Injectable()
export class HttpInterceptors implements HttpInterceptor {

  user: User;
  constructor(private sessionService: SessionService,
              private store: Store<AppState>) {
    this.store.pipe(select(getUserState)).subscribe(user => this.user = user);
  }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if (this.user && this.user.jwtToken) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${this.user.jwtToken}`
        }
      });
    }
    return next.handle(request);
  }
}
