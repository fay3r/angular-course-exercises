import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent implements OnInit {

  @Input()
  isFavourite:boolean |undefined;
  @Output() change = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    this.isFavourite = !this.isFavourite;
    this.change.emit();
  }

}
