import { createReducer, on } from '@ngrx/store';
import { PostState } from '../post.state';
import {
  deletePostSuccess,
  editPostSuccess,
  loadedPost,
  loadPost,
  newPostSuccess,
} from './post.actions';

export const initialState: PostState = { post: [] };

export const postReducer = createReducer(
  initialState,
  on(loadPost, (state) => {
    return { ...state };
  }),
  on(loadedPost, (state, { post }) => {
    return { ...state, post };
  }),
  on(deletePostSuccess, (state, { id }) => ({
    ...state,
    post: state.post.filter((post) => post.id !== id),
  })),
  on(newPostSuccess, (state, { post }) => ({
    ...state,
    post: [post, ...state.post],
  })),
  on(editPostSuccess, (state, { post }) => {
    let newState = state.post.filter((_) => _.id !== post.id);
    newState.unshift(post);
    return {...state, post: newState};
  }),
);
