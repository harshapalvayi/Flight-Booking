import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {User} from '@models/User';
import {Observable} from 'rxjs';

const API_URL = 'http://localhost:8080';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) { }

  login(data: User): Observable<any> {
    const username = data.username;
    const password = data.password;
    return this.http.post<any>(`${API_URL}/authenticate`, { username, password }, httpOptions);
  }

  register(data: User): Observable<any> {
    const username = data.username;
    const password = data.password;
    const email = data.email;
    return this.http.post<any>(`${API_URL}/register`, {username, password, email}, httpOptions);
  }

  refresh(): Observable<any> {
    return this.http.get<any>(`${API_URL}/refresh`, httpOptions);
  }
}
