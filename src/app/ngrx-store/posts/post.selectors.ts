import { createSelector } from '@ngrx/store';
import { GlobalState } from 'src/app/models/global.model.interface';
import { PostState } from '../post.state';

export const selectPostFeature = (state: GlobalState) => state.posts;

export const selectListPost = createSelector(
  selectPostFeature,
  (state: PostState) => state.post
);
