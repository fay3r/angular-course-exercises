import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewServiceService {

  constructor() { }

  getCourse(){
    return ['course1','course2','course3'];
  }
}
