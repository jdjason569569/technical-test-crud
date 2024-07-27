import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { GlobalState } from 'src/app/models/global.model.interface';
import { Post } from 'src/app/models/post.model.interface';
import { loadPost } from 'src/app/ngrx-store/posts/post.actions';
import { selectListPost } from 'src/app/ngrx-store/posts/post.selectors';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  posts$: Observable<Post[]> = new Observable();

  constructor(private store: Store<GlobalState>) {
    this.posts$ = this.store.select(selectListPost);
  }

  ngOnInit(): void {
    this.store.dispatch(loadPost());
  }

}
