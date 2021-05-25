import { Component, OnInit } from '@angular/core';
import {FavouriteChangedEventArgs} from "../favourite/favourite.component";

@Component({
  selector: 'app-differenttasks',
  templateUrl: './differenttasks.component.html',
  styleUrls: ['./differenttasks.component.css']
})
export class DifferenttasksComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  title = 'courseEx';

  post = {
    title: 'Title',
    isFavourite: true
  }

  tweet = {
    body: 'body of the tweet',
    isLiked: false,
    likesCount: 5
  }

  courses = [
    {id: 1, name: 'course1'},
    {id: 2, name: 'course2'},
    {id: 3, name: 'course3'},
  ];

  courses2: any;

  viewMode = 'default';


  onFavouriteChanged(eventArgs: FavouriteChangedEventArgs) {
    console.log(eventArgs)
  }

  onAdd() {
    this.courses.push({id: 4, name: 'course4'})
  }


  onRemove(course: any) {
    let index = this.courses.indexOf(course);
    this.courses.splice(index, 1);
  }

  loadData() {
    this.courses2 = [
      {id: 1, name: 'course1'},
      {id: 2, name: 'course2'},
      {id: 3, name: 'course3'},
    ];
  }

  trackCourse(index:any,course:any){
    return course ? course.id : undefined;
  }
}
