import { Component } from '@angular/core';
import { Router } from '@angular/router'
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-newpost',
  templateUrl: './newpost.component.html',
  styleUrls: ['./newpost.component.css']
})
export class NewpostComponent {

  newPostForm = this.formBuilder.group({
    title: ['', Validators.required],
    comment: ['', Validators.required]
  })

  constructor(private router: Router,
              private postsService: PostsService,
              private formBuilder: FormBuilder
              ) { }


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
