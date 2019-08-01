import { Component, Input } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css']
})

export class PostListItemComponent {
  @Input() status: string
  @Input() id: string
  @Input() title: string
  @Input() comment: string
  @Input() likeIts: number
  @Input() dislikeIts: number
  
  constructor(private postsService: PostsService) { 
  }

  onLikeIncrement(id: string) {
    this.postsService.likeIncrementer(id) 
    this.postsService.setStatus()
  }

  onDislikeIncrement(id: string) { 
    this.postsService.dislikeIncrementer(id) 
    this.postsService.setStatus()
  }

  onRemove(id: string) {
    this.postsService.removePost(id)
  }

}
