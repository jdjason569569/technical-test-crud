import { createReducer, on } from "@ngrx/store";
import { PostState } from "../post.state";

export const initialState: PostState = {post: []}

export const postReducer = createReducer(
  initialState,

)
