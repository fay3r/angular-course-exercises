import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewComponentComponent } from './components/new-component/new-component.component';
import {NewServiceService} from "./service/new-service.service";
import { AuthorsComponent } from './components/authors/authors.component';
import { TitleCasingComponent } from './components/title-casing/title-casing.component';
import {FormsModule} from "@angular/forms";
import { ExamplePipe } from './pipe/example.pipe';
import { FavouriteComponent } from './components/favourite/favourite.component';

@NgModule({
  declarations: [
    AppComponent,
    NewComponentComponent,
    AuthorsComponent,
    TitleCasingComponent,
    ExamplePipe,
    FavouriteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [NewServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
