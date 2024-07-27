import { Injectable } from '@angular/core';
import { Actions } from '@ngrx/effects';
import { PostService } from 'src/app/services/post.service';


@Injectable()
export class PostEffects {
  constructor(private actions$: Actions, private postService: PostService) {}



}
