import {map} from 'rxjs/operators';
import {User} from '@models/User';
import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
export const API_URL = 'http://localhost:8080';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  private userProfile: BehaviorSubject<User>;
  userInfo: Observable<User>;

  constructor(private http: HttpClient) {
    this.userProfile = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('user')));
    this.userInfo = this.userProfile.asObservable();
  }

  getUserProfile(): User {
    return this.userProfile.value;
  }

  setUserProfile(user: User): void {
      this.userProfile.next(user);
  }

  signIn(data: User): Observable<User> {
    const username = data.username;
    const password = data.password;
        return this.http.post<any>(`${API_URL}/authenticate`, { username, password }, httpOptions)
      .pipe(map(user => {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        this.saveUserToStorage(user);
        this.setUserProfile(user);
        return user;
      }));
  }

  signUp(data: User): Observable<User> {
    const firstname = data.firstname;
    const lastname = data.lastname;
    const username = data.username;
    const email = data.email;
    const password = data.password;
    return this.http.post<any>(`${API_URL}/register`, { firstname, lastname, username, email, password })
      .pipe(map(user => {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        this.saveUserToStorage(user);
        this.setUserProfile(user);
        return user;
      }));
  }

  private saveUserToStorage(user: User): void {
    const userInfo: User = {
      userid: user.userid,
      username: user.username,
      email: user.email,
      token: user.token,
      accountType: user.accountType
    };
    window.localStorage.setItem('user', JSON.stringify(userInfo));
  }

}
