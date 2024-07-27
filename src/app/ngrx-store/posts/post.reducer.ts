import { createReducer, on } from "@ngrx/store";
import { PostState } from "../post.state";
import { loadedPost, loadPost } from "./post.actions";

export const initialState: PostState = {post: []}

export const postReducer = createReducer(
  initialState,
  on(loadPost, (state) => {
    return { ...state };
  }),
  on(loadedPost, (state, {post}) => {
    return {...state, post}
  }),

)
