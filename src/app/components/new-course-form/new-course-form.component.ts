import {Component} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'new-course-form',
  templateUrl: './new-course-form.component.html',
  styleUrls: ['./new-course-form.component.css']
})
export class NewCourseFormComponent {
  form = new FormGroup({
    name: new FormControl('',Validators.required),
    contact: new FormGroup({
      email: new FormControl(),
      phone: new FormControl()
    }),
    topics: new FormArray([])
  });
  // gora i dol to samo !#%@#$^$@************************
  constructor(fb: FormBuilder) {
    // this.form =
    fb.group({
      name:['',Validators.required],
      contact: fb.group({
        email: [],
        phone: []
      }),
      topics: fb.array([])
    })
  }

  addTopic(topic: HTMLInputElement) {
    (this.form.get('topics') as FormArray).push(new FormControl(topic.value));
    topic.value= '';
  }

  get controls() {
    return (this.form.get('topics') as FormArray).controls
  }

  removeTopic(topic: any) {
    let index = this.controls.indexOf(topic);
    (this.form.get('topics') as FormArray).removeAt(index);
  }
}
