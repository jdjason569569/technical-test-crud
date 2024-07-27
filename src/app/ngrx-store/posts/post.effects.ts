import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { catchError, EMPTY, map, mergeMap, switchMap } from 'rxjs';
import { deletePost, deletePostSuccess, loadPost, newPost, newPostSuccess } from './post.actions';
import { PostService } from 'src/app/services/post.service';

@Injectable()
export class PostEffects {
  constructor(private actions$: Actions, private postService: PostService) {}

  loadPost$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadPost),
      mergeMap(() =>
        this.postService.getPost().pipe(
          map((post) => ({ type: '[Post List] loaded success', post })),
          catchError(() => EMPTY)
        )
      )
    )
  );

  deletePost$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deletePost),
      switchMap((action) =>
        this.postService.deletePost(action.id).pipe(
          map(() => deletePostSuccess({ id: action.id })),
          catchError(() => EMPTY)
        )
      )
    )
  );

  saveNewPost$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(newPost),
      switchMap((action) => {
        return this.postService.createPost(action.post).pipe(
          map(() => newPostSuccess({ post: action.post })),
          catchError(() => EMPTY)
        );
      })
    );
  });
}
