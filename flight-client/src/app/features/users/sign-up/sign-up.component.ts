import {Router} from '@angular/router';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Component, ViewChild} from '@angular/core';
import {UserService} from '@shared/services/user/user.service';
import {BehaviorSubject} from 'rxjs';
import {Actions, ofType} from '@ngrx/effects';
import {Store} from '@ngrx/store';
import {AuthenticationService} from '@shared/services/authentication/authentication.service';
import {AppState} from '@store/app.reducer';
import * as fromUserActions from '@store/user-store/user.action';
import {UserErrorsComponent} from '@shared/templates/user-errors/user-errors.component';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.sass']
})
export class SignUpComponent {

  @ViewChild(UserErrorsComponent, {static: false}) error: UserErrorsComponent;
  public errorMessage$: BehaviorSubject<string>;
  public signupForm: FormGroup = this.userService.createSignUpForm();

    constructor(private router: Router,
                private fb: FormBuilder,
                private actions$: Actions,
                private jwtService: AuthenticationService,
                private userService: UserService,
                private store: Store<AppState>) {
        this.errorMessage$ = new BehaviorSubject<string>('');
        actions$.pipe(
            ofType(fromUserActions.SIGNUP_FAIL),
        ).subscribe( error => this.error.showDialog(error));
    }

    onSubmit() {
        const username = this.signupForm.value.username;
        const password = this.signupForm.value.password;
        const email = this.signupForm.value.email;
        this.store.dispatch(new fromUserActions.SignupStart(
            {
                username: username,
                password: password,
                email: email
            }));
        this.signupForm.reset();
    }
}
