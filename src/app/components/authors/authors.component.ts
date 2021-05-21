import { Component, OnInit } from '@angular/core';
import {NewServiceService} from "../../service/new-service.service";

@Component({
  selector: 'authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {

  title = "Authors";
  authors;

  constructor(service: NewServiceService) {
    // @ts-ignore
    this.authors = service.getAuthors();
  }

  ngOnInit(): void {
  }

  getTitle(){
    return this.authors.length + " " + this.title;
  }
}
