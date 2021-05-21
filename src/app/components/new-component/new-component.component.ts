import { Component, OnInit } from '@angular/core';
import {NewServiceService} from '../../service/new-service.service'

@Component({
  selector: 'new-component',
  templateUrl: './new-component.component.html',
  styleUrls: ['./new-component.component.css']
})
export class NewComponentComponent implements OnInit {

  title = "List of Courses"
  courses;
  imageUrl = "https://lorempixel.com/400/200"
  isActive = false;

  constructor(service: NewServiceService) {
    this.courses = service.getCourse();
  }

  ngOnInit(): void {
  }

  onSave() {
    console.log("zapisuje");
  }
}
