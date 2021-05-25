import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NewComponentComponent} from './components/new-component/new-component.component';
import {NewServiceService} from "./service/new-service.service";
import {AuthorsComponent} from './components/authors/authors.component';
import {TitleCasingComponent} from './components/title-casing/title-casing.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ExamplePipe} from './pipe/example.pipe';
import {FavouriteComponent} from './components/favourite/favourite.component';
import {PanelComponentComponent} from './components/panel-component/panel-component.component';
import {LikeComponent} from './components/like/like.component';
import {InputFormatDirective} from './directives/input-format.directive';
import {ZippyComponent} from './components/zippy/zippy.component';
import {ContactFormComponent} from './components/contact-form/contact-form.component';
import {CourseFormComponent} from './components/course-form/course-form.component';
import {SignupFormComponent} from "./components/signup-form/signup-form.component";
import {NewCourseFormComponent} from './components/new-course-form/new-course-form.component';
import {ChangePasswordComponent} from './components/change-password/change-password.component';
import {PostComponent} from './components/post/post.component';
import { HttpClientModule} from "@angular/common/http";
import {PostService} from "./service/post.service";
import { GithubFollowersComponent } from './components/github-followers/github-followers.component';
import {GithubFollowersService} from "./service/github-followers.service";
import {NavbarComponent} from "./components/navbar/navbar.component";
import {HomeComponent} from "./components/home/home.component";
import {GithubProfileComponent} from "./components/github-profile/github-profile.component";
import {NotFoundComponent} from "./components/not-found/not-found.component";
import {RouterModule} from "@angular/router";
import { DifferenttasksComponent } from './components/differenttasks/differenttasks.component';
import { ArchiveHomeComponent } from './components/archive-home/archive-home.component';
import { ArchiveDetailsComponent } from './components/archive-details/archive-details.component';

@NgModule({
  declarations: [
    AppComponent,
    NewComponentComponent,
    AuthorsComponent,
    TitleCasingComponent,
    ExamplePipe,
    FavouriteComponent,
    PanelComponentComponent,
    LikeComponent,
    InputFormatDirective,
    ZippyComponent,
    ContactFormComponent,
    CourseFormComponent,
    SignupFormComponent,
    NewCourseFormComponent,
    ChangePasswordComponent,
    PostComponent,
    GithubFollowersComponent,
    NavbarComponent,
    HomeComponent,
    GithubProfileComponent,
    NotFoundComponent,
    DifferenttasksComponent,
    ArchiveHomeComponent,
    ArchiveDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

  ],
  providers: [NewServiceService, PostService, GithubFollowersService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
