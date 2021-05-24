import {Component, OnInit} from '@angular/core';
import {PostService} from "../../service/post.service";

@Component({
  selector: 'post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  posts: any = [];


  constructor(private service: PostService) {
  }

  ngOnInit(): void {
    this.service.getAll().subscribe(response => {
      console.log(response)
      this.posts = response;
    }, error => {
      alert('get error');
      console.log(error);
    });
  }


  createPost(input: HTMLInputElement) {
    let post: any = {title: input.value}
    this.posts.splice(0, 0, post);
    input.value = '';
    this.service.create(post).subscribe(response => {
      post.id = response;
      console.log(response);
    }, error => {
      this.posts.splice(0,1);
      if (error.status === 400) {
        //this.form.setErrors(error.json);
      } else {
        alert('create errpr');
        console.log(error);
      }
    })
  }

  updatePost(post: any) {
    this.service.update(post)
      .subscribe(response => {
        console.log(response);
      }, error => {
        alert('update error');
        console.log(error);
      });
  }

  deletePost(post: any) {
    this.service.delete(post.id)
      .subscribe(response => {
        let index = this.posts.indexOf(post);
        this.posts.splice(index, 1);
      }, error => {
        if (error.status === 404) {
          alert('alrd deleted')
        } else {
          alert('delete error');
          console.log(error);
        }
      });
  }


}
