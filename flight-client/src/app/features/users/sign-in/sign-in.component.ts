import {Store} from '@ngrx/store';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Component, ViewChild} from '@angular/core';
import {UserService} from '@shared/services/user/user.service';
import {BehaviorSubject} from 'rxjs';
import {Actions, ofType} from '@ngrx/effects';
import * as fromApp from '@store/app.reducer';
import * as fromUserActions from '@store/user-store/user.action';
import {UserErrorsComponent} from '@shared/templates/user-errors/user-errors.component';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.sass']
})
export class SignInComponent {

    @ViewChild(UserErrorsComponent, {static: false}) error: UserErrorsComponent;
    errorMessage$: BehaviorSubject<string>;
    public signInForm: FormGroup = this.userService.createSignInForm();


    constructor(private fb: FormBuilder,
                private actions$: Actions,
                private userService: UserService,
                private store: Store<fromApp.AppState>) {
        this.errorMessage$ = new BehaviorSubject<string>('');
        actions$.pipe(ofType(fromUserActions.LOGIN_FAIL))
            .subscribe( error => this.error.showDialog(error));
    }

    onSubmit() {
        if (this.signInForm.invalid) {
            return;
        }
        const username = this.signInForm.value.username;
        const password = this.signInForm.value.password;
        this.store.dispatch(new fromUserActions.LoginStart(
            {
                username: username,
                password: password
            }));
        this.signInForm.reset();
    }
}
