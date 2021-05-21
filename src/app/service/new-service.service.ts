import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewServiceService {

  constructor() { }

  getCourse(){
    return ['course1','course2','course3'];
  }

  getAuthors(){
    return ['author1','author2','author3']
  }
}
