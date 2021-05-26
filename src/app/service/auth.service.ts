import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from "../../environments/environment";
import {map} from "rxjs/operators";

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {
  }

  login(credentials:any ) {
   return this.http.post(`'/api/authenticate`,
      JSON.stringify(credentials));
  }

  logout() {
  }

  isLoggedIn() {
    return false;
  }
}

