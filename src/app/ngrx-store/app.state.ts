import { ActionReducerMap } from '@ngrx/store';
import { GlobalState } from '../models/global.model.interface';
import { photosReducer } from './photos/photos.reducer';
import { postReducer } from './posts/post.reducer';

/**
 * Class that allows you to manage the global state of the application and its reducers
 */

export const ROOT_REDUCERS: ActionReducerMap<GlobalState> = {
  posts: postReducer,
  photos: photosReducer,
};
