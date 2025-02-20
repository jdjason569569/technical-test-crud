import { createAction, props } from '@ngrx/store';
import { Photo } from 'src/app/models/photo.model.interface';

export const loadPhotos = createAction('[Photo List] load photos');

export const loadedPhotos = createAction(
  '[Photo List] loaded success',
  props<{ photos: Photo[] }>()
);

export const deletePhoto = createAction(
  '[Photo Delete] delete success',
  props<{ id: number }>()
);

export const deletePhotoSuccess = createAction(
  '[Photo Delete] deleted photo api success',
  props<{ id: number }>()
);

export const newPhoto = createAction(
  '[Photo New] New photo',
  props<{ photo: Photo }>()
);

export const editPhoto = createAction(
  '[Photo edit] Edit Photo',
  props<{ photo: Photo }>()
);

export const newPhotoSuccess = createAction(
  '[Photo New success] New photo success',
  props<{ photo: Photo }>()
);

export const editPhotoSuccess = createAction(
  '[Photo Edit success] Edit photo success',
  props<{ photo: Photo }>()
);
