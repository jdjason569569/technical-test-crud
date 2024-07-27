import { createSelector } from '@ngrx/store';
import { GlobalState } from 'src/app/models/global.model.interface';
import { PhotoState } from '../photo.state';

export const selectPhotosFeature = (state: GlobalState) => state.photos;

export const selectListPhotos = createSelector(
  selectPhotosFeature,
  (state: PhotoState) => state.photos
);
