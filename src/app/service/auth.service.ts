import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from "rxjs/operators";

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {
  }

  login(credentials:any ) {
   return this.http.post(`'/api/authenticate`,
      JSON.stringify(credentials)).pipe(
        map((response:any) => {
          if(response && response.token){
            localStorage.setItem('token',response.token);
            return true;
          }
          return false;
        })
   );
  }

  logout() {
    localStorage.removeItem('token');
  }

  isLoggedIn() {
    return false;
  }
}

