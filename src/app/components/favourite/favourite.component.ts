import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent  {

  @Input()
  isFavourite:boolean |undefined;
  @Output() change = new EventEmitter();

  onClick(){
    this.isFavourite = !this.isFavourite;
    this.change.emit({newValue: this.isFavourite});
  }
}

export interface FavouriteChangedEventArgs {
  newValue: boolean
}
