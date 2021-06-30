import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {SessionService} from '../services/session/session.service';

@Injectable()
export class HttpInterceptors implements HttpInterceptor {

  constructor(private sessionService: SessionService) {}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const user: any = this.sessionService.getUser();
    if (user.jwtToken) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${user.jwtToken}`
        }
      });
    }
    console.log('req', request);
    return next.handle(request);
  }
}
