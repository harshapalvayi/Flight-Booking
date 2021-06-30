import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {SessionService} from '../session/session.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {AccountType} from '@models/AccountType';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private signInForm: FormGroup | undefined;
  private signUpForm: FormGroup | undefined;

  constructor(private fb: FormBuilder) { }

  createSignInForm(): FormGroup {
    this.signInForm =  this.fb.group({
      username: [null, [Validators.required, Validators.minLength(4)]],
      password: [null, [Validators.required, Validators.minLength(4)]]
    });
    return this.signInForm;
  }

  createSignUpForm(): FormGroup {
    this.signUpForm = this.fb.group({
      username: [null, [Validators.required, Validators.minLength(4)]],
      password: [null, [Validators.required, this.validatePasscode]],
      email: [null, [Validators.required, Validators.email]],
    });
    return this.signUpForm;
  }

  signOut(): void {
    window.sessionStorage.clear();
    window.localStorage.clear();
  }

  isUserLoggedIn(): boolean {
    const user = window.localStorage.getItem('user');
    return !(user === null);
  }

  validatePasscode(control: FormControl): { [p: string]: boolean } | null {
    if (control.value) {
      if (control.value.toString().length < 7) {
        return {limit: true};
      }
      if (!control.value.toString().match(/.*[0-9]+.*/)) {
        return {number: true};
      }
      if (!control.value.toString().match(/.*[@#$%^&+=].*/)) {
        return {special: true};
      }
      if (!control.value.toString().match(/.*[A-Z].*/)) {
        return {capital: true};
      }
    }
    return null;
  }

 isAdmin(): AccountType {
    return AccountType.ADMIN;
 }

 isUser(): AccountType {
    return AccountType.USER;
 }

}
