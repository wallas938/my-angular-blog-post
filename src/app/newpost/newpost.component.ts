import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { FormGroup, FormControl } from '@angular/forms';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-newpost',
  templateUrl: './newpost.component.html',
  styleUrls: ['./newpost.component.css']
})
export class NewpostComponent implements OnInit {

  newPostForm = new FormGroup({
    title: new FormControl(''),
    comment: new FormControl('')
  })

  constructor(private router: Router,
              private postsService: PostsService) { }

  ngOnInit() {
  }

  onSubmit() {
    const data = this.newPostForm.value
    const id = 'id_' + Math.random().toString(36).substr(2)
    const status = 'isEqual';
    const likeIts = 0
    const dislikeIts = 0
    this.postsService.addNewPost({...data, id, status, likeIts, dislikeIts})
    this.router.navigate(['/posts'])
  }

}
