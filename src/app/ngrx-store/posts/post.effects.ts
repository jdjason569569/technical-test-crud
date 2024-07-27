import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { catchError, EMPTY, map, mergeMap } from 'rxjs';
import { loadPost } from './post.actions';
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
}
