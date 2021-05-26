
import { Component } from '@angular/core';
import { Router } from "@angular/router";
import {AuthService} from "../../service/auth.service";

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  invalidLogin: boolean | undefined;

  constructor(
    private router: Router,
    private authService: AuthService) { }

  signIn(credentials:any) {
    console.log(credentials)
    this.authService.login(credentials)
      .subscribe(result => {
        if (result)
          this.router.navigate(['/']);
        else
          this.invalidLogin = true;
      });
  }
}
