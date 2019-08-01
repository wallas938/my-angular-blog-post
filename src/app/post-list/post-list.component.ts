import { Component, OnInit, Input, Output, OnDestroy } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit, OnDestroy {

  posts: any[] = []

  postsSubscription: Subscription

  constructor(private postService: PostsService) { }

  ngOnInit() {
    this.postsSubscription = this.postService.postsSubject.subscribe(
      posts => {
        this.posts = posts
      }
    )
    this.postService.postsEmitter()
    console.log('changement !!!')
  }

  ngOnDestroy() {
    this.postsSubscription.unsubscribe()
  }

}
