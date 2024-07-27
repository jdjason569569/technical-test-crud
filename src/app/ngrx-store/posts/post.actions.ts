import { createAction, props } from "@ngrx/store";
import { Post } from "src/app/models/post.model.interface";


export const loadPost = createAction(
  '[Post List] load post'
)

export const loadedPost = createAction(
  '[Post List] loaded success',
  props<{post: Post[]}>()
)
