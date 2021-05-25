import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PostComponent} from "./components/post/post.component";
import {HomeComponent} from "./components/home/home.component";
import {GithubFollowersComponent} from "./components/github-followers/github-followers.component";
import {GithubProfileComponent} from "./components/github-profile/github-profile.component";
import {NotFoundComponent} from "./components/not-found/not-found.component";
import {DifferenttasksComponent} from "./components/differenttasks/differenttasks.component";
import {ArchiveDetailsComponent} from "./components/archive-details/archive-details.component";
import {ArchiveHomeComponent} from "./components/archive-home/archive-home.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'followers/:id/:username',
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
    path: 'tasks',
    component: DifferenttasksComponent
  },
  {
    path: 'archive/:year/:month',
    component: ArchiveDetailsComponent
  },
  {
    path: 'archive',
    component: ArchiveHomeComponent
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
