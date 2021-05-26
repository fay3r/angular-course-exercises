
import { Component } from '@angular/core';
import {AuthService} from "../../service/auth.service";

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(public authService: AuthService) { }
}
