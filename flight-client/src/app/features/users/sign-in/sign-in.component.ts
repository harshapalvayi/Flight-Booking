import {Router} from '@angular/router';
import {FormBuilder, FormGroup} from '@angular/forms';
import {HttpErrorResponse} from '@angular/common/http';
import {Component, ElementRef, OnInit} from '@angular/core';
import {UserService} from '@shared/services/user/user.service';
import {SessionService} from '@shared/services/session/session.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.sass']
})
export class SignInComponent implements OnInit {

  public errorMessage: any;
  public signInForm: FormGroup = this.userService.createSignInForm();

  constructor(private fb: FormBuilder,
              private router: Router,
              private userService: UserService,
              private elementRef: ElementRef,
              private sessionService: SessionService) { }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.signInForm.invalid) {
      return;
    }

    this.sessionService.signIn(this.signInForm.value)
      .subscribe(data => {
           this.signInForm.reset();
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
