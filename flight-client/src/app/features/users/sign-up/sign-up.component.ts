import {Router} from '@angular/router';
import {first} from 'rxjs/operators';
import {SelectItem} from 'primeng/api';
import {FormBuilder, FormGroup} from '@angular/forms';
import {HttpErrorResponse} from '@angular/common/http';
import {Component, ViewChild} from '@angular/core';
import {UserService} from '@shared/services/user/user.service';
import {SessionService} from '@shared/services/session/session.service';
import {NotificationService} from '@shared/services/notification/notification.service';
import {UserErrorsComponent} from '@features/users/dialogs/user-errors/user-errors.component';
import {Accounts as accountType} from '@models/AccountType';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.sass']
})
export class SignUpComponent {

  @ViewChild(UserErrorsComponent, {static: false}) error: UserErrorsComponent;
  public errorMessage: string;
  public accounts: SelectItem[] = [];
  public signupForm: FormGroup = this.userService.createSignUpForm();


  constructor(private router: Router,
              private fb: FormBuilder,
              private userService: UserService,
              private sessionService: SessionService,
              private notification: NotificationService) {
    this.accounts = accountType;
  }

  onSubmit(): void {
    if (this.signupForm.invalid) {
      return;
    }

    this.sessionService.signUp(this.signupForm.value)
      .pipe(first())
      .subscribe(data => {
          console.log('data', data);
          const toastDetails = {
            message: 'Success',
            details: 'User Registered Successfully'
          };
          this.notification.showSuccess(toastDetails);
          this.signupForm.reset();
          this.router.navigate(['/app-home']).then();
          this.errorMessage = null;
        },
        (error: { error: { message: string; }; }) => {
          if (error instanceof HttpErrorResponse) {
            this.errorMessage = error.error.message;
          }
        }
      );
  }
}
