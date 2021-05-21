import { Component } from '@angular/core';
import {FavouriteChangedEventArgs} from "./components/favourite/favourite.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'courseEx';

  post={
    title:'Title',
    isFavourite:true
  }

  tweet={
    body:'body of the tweet',
    isLiked:false,
    likesCount:5
  }


  onFavouriteChanged(eventArgs:FavouriteChangedEventArgs) {
    console.log(eventArgs)
  }

}
