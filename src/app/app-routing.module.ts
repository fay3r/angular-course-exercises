import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PostComponent} from "./components/post/post.component";
import {HomeComponent} from "./components/home/home.component";
import {GithubFollowersComponent} from "./components/github-followers/github-followers.component";
import {GithubProfileComponent} from "./components/github-profile/github-profile.component";
import {NotFoundComponent} from "./components/not-found/not-found.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'followers/:username',
    component: GithubProfileComponent
  },
  {
    path: 'followers',
    component: GithubFollowersComponent
  },
  {
    path: 'posts',
    component: PostComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
