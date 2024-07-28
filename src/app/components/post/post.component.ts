import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { GlobalState } from 'src/app/models/global.model.interface';
import { Post } from 'src/app/models/post.model.interface';
import {
  deletePost,
  editPost,
  loadPost,
  newPost,
} from 'src/app/ngrx-store/posts/post.actions';
import { selectListPost } from 'src/app/ngrx-store/posts/post.selectors';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  page: number = 1;
  posts$: Observable<Post[]> = new Observable();
  isMenu = false;
  isEdit = false;
  form: FormGroup;

  constructor(
    private store: Store<GlobalState>,
    private formBuilder: FormBuilder
  ) {
    this.posts$ = this.store.select(selectListPost);
    this.form = this.formBuilder.group({
      title: ['', Validators.required],
      body: ['', [Validators.required]],
      id: ['', Validators.required],
    });
    this.form.get('id')?.enable();
  }

  public deletePost(id: number) {
    this.store.dispatch(deletePost({ id }));
  }

  public onSubmit() {
    if (this.form.valid) {
      let post: Post = {
        id: this.form.get('id')?.value,
        title: this.form.get('title')?.value,
        body: this.form.get('body')?.value,
      };
      if (this.isEdit) {
        this.store.dispatch(editPost({ post }));
      } else {
        this.store.dispatch(newPost({ post }));
      }
      this.cleanVars();
    }
  }

  public newPost() {
    this.isMenu = !this.isMenu;
  }

  private cleanVars() {
    this.isMenu = false;
    this.form.reset();
    this.form.get('id')?.enable();
    this.isEdit = false;
  }

  public editPost(post: Post) {
    this.form.setValue({
      id: post.id,
      title: post.title,
      body: post.body,
    });
    this.form.get('id')?.disable();
    this.isMenu = true;
    this.isEdit = true;
  }

  ngOnInit(): void {
    this.store.dispatch(loadPost());
  }
}
