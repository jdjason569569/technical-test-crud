import { createReducer, on } from '@ngrx/store';
import { PhotoState } from '../photo.state';
import {
  deletePhotoSuccess,
  loadedPhotos,
  loadPhotos,
  newPhotoSuccess,
} from './photos.actions';

export const initialState: PhotoState = { photos: [] };

export const photosReducer = createReducer(
  initialState,
  on(loadPhotos, (state) => {
    return { ...state };
  }),
  on(loadedPhotos, (state, { photos }) => {
    return { ...state, photos };
  }),
  on(deletePhotoSuccess, (state, { id }) => ({
    ...state,
    photos: state.photos.filter((photo) => photo.id !== id),
  })),
  on(newPhotoSuccess, (state, { photo }) => ({
    ...state,
    photos: [photo , ...state.photos ],
  }))
);
