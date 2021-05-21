import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent {

  @Input()
  isLiked:boolean |undefined;
  @Input()
  likeCounter:any;

  onClick(){
    this.likeCounter += this.isLiked ? -1:1;
    this.isLiked=!this.isLiked;

  }

}
