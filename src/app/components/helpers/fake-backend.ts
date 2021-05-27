import {Injectable} from '@angular/core';
import {
  HttpRequest,
  HttpResponse,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import {Observable, of, throwError} from 'rxjs';
import {delay, mergeMap, materialize, dematerialize} from 'rxjs/operators';


@Injectable()
export class FakeBackend implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const {url, method, headers, body} = request;
    // let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6ImFhYWEiLCJ0eXBlIjoidHJ1ZSJ9.Cve5oGOxdmffxtW06m8aArg6K_ABcfMoM_ltfTnav6o'; // tak
    let token ='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6ImFhYWEiLCJ0eXBlIjoiZmFsc2UifQ.R6-rfCR1jnb0fKzWbikDf4KIpwfFSTCjByw_gOZIhzk';  // nie
    // wrap in delayed observable to simulate server api call
    return of(null)
      .pipe(mergeMap(handleRoute))
      .pipe(materialize())
      .pipe(delay(500))
      .pipe(dematerialize());

    function handleRoute() {
      switch (true) {
        case url.endsWith('/api/authenticate') && method === 'POST':
          return authenticate();
        case url.match('/api/orders') && method === 'GET':
          return getOrders();
        default:
          // pass through any requests not handled above
          return next.handle(request);
      }
    }

    function authenticate() {

      const {email, password} = JSON.parse(body);
      if (email === 'fayer@domain.com' && password === '1234') {
        return ok({token: token})
      } else {
        return ok();
      }
    }

    function getOrders() {
      if (headers.get('Authorization') === 'Bearer ' + token) {
        return ok({
          data: [1, 2, 3]
        });
      } else {
        return unauthorized();
      }
    }


    // helper functions

    function ok(body?: any) {
      return of(new HttpResponse({status: 200, body}))
    }

    function error(message: any) {
      return throwError({status:401,error: {message}});
    }

    function unauthorized() {
      return throwError({status: 401, error: {message: 'Unauthorised'}});
    }

    function isLoggedIn() {
      return headers.get('Authorization') === 'Bearer fake-jwt-token';
    }

    function idFromUrl() {
      const urlParts = url.split('/');
      return parseInt(urlParts[urlParts.length - 1]);
    }
  }
}

export const fakeBackendProvider = {
  // use fake backend in place of Http service for backend-less development
  provide: HTTP_INTERCEPTORS,
  useClass: FakeBackend,
  multi: true
};
