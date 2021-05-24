import {Inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError} from "rxjs/operators";
import {Observable, throwError} from "rxjs";

class NotFoundError {
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(@Inject(String)private url:any ,private http:HttpClient) { }

  getAll(){
    return this.http.get(this.url)
  }

  create(resource:any){
    return Observable.throw(NotFoundError);
    return this.http.post(this.url, JSON.stringify(resource));
  }

  update(resource:any) {
    return this.http.patch(this.url + "/" + resource.id, JSON.stringify({isRead: true}));
  }

  delete(id:any){
    return this.http.delete(this.url + '/' + id).pipe(catchError((error)=>{
      if(error.status ===404){
        return throwError(new NotFoundError());
      }
      return throwError(error);
    }))
  }
}
