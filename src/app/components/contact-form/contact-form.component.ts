import { Component, OnInit } from '@angular/core';
import {NgForm, NgModel} from "@angular/forms";

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  options= [
    {id:1,name:'Email'},
    {id:2,name:'Phone'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

  log(firstName: NgModel) {
    console.log(firstName);
  }

  submit(f: NgForm) {
    console.log(f)
  }
}
