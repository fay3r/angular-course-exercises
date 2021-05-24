import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError} from "rxjs/operators";
import { throwError} from "rxjs";
import {DataService} from "./data.service";

class NotFoundError {
}

@Injectable({
  providedIn: 'root'
})
export class PostService extends DataService{

  constructor(http:HttpClient) {
    super('https://jsonplaceholder.typicode.com/posts',http);
  }

}
