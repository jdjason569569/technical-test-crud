import { createAction, props } from "@ngrx/store";
import { Post } from "src/app/models/post.model.interface";


export const loadPost = createAction(
  '[Post List] load post'
)

export const loadedPost = createAction(
  '[Post List] loaded success',
  props<{post: Post[]}>()
)

export const deletePost = createAction(
  '[Post Delete] delete success',
  props<{ id: number }>()
);

export const deletePostSuccess = createAction(
  '[Post Delete] deleted post api success',
  props<{ id: number }>()
);

export const newPost = createAction(
  '[Photo New] New Post',
  props<{ post: Post }>()
);

export const newPostSuccess = createAction(
  '[Post New success] New post success',
  props<{ post: Post }>()
);
