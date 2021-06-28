import {Router} from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {UserService} from '@shared/services/user/user.service';

@Component({
  selector: 'app-sign-out',
  templateUrl: './sign-out.component.html',
  styleUrls: ['./sign-out.component.sass']
})
export class SignOutComponent implements OnInit {

  constructor(private router: Router,
              private userService: UserService) { }

  ngOnInit(): void {
    this.userService.signOut();
    this.router.navigate(['/app-sign-in']).then();
  }

}
