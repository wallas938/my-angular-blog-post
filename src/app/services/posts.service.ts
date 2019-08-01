import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  posts: any[] = [
    {
      id: 'test', 
      title: 'SF5', 
      comment: 'djndendeodzenod', 
      likeIts: 0, 
      dislikeIts: 0,
      status: 'isEqual'
    }
  ]

  postsSubject = new Subject<any[]>()

  constructor() { }

  postsEmitter() {
    this.postsSubject.next(this.posts.slice())
  }

  removePost(id: string) {
    this.posts = this.posts.filter(
      post => post.id !== id
    )
    this.postsEmitter()
  }

  addNewPost(data: any) {
    this.posts = [...this.posts, data]
    this.postsEmitter()
  }

  likeIncrementer(id: string) {
    this.posts = [...this.posts].map(
      post => {
        if(post.id === id) {
          post.likeIts += 1
        }

        return post
      }
    )
  }

  dislikeIncrementer(id: string) {
    this.posts = [...this.posts].map(
      post => {
        if(post.id === id) {
          post.dislikeIts += 1
        }
        
        return post
      }
    )
  }

  
  setStatus() {
    this.posts = [...this.posts].map(
      post => {
        if(post.likeIts === post.dislikeIts) {
          post.status = 'isEqual'
        }else if(post.likeIts > post.dislikeIts) {
          post.status = 'isOutNumbering';
        }else if(post.likeIts < post.dislikeIts) {
          post.status = 'isOutNumbered';
        }
        return post
      } 
    )
  }
}
