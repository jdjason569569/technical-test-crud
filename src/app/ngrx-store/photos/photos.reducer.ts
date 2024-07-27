import { createReducer, on } from '@ngrx/store';
import { PhotoState } from '../photo.state';
import { loadedPhotos, loadPhotos } from './photos.actions';

export const initialState: PhotoState = { photos: [] };

export const photosReducer = createReducer(
  initialState,
  on(loadPhotos, (state) => {
    return { ...state };
  }),
  on(loadedPhotos, (state, {photos}) => {
    return {...state, photos}
  }),
);
