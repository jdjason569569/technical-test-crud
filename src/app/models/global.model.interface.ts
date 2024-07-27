import { PhotoState } from "../ngrx-store/photo.state";
import { PostState } from "../ngrx-store/post.state";

export interface GlobalState{
  posts: PostState,
  photos: PhotoState
}
