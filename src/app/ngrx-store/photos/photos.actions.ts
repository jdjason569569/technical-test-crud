import { createAction, props } from "@ngrx/store";
import { Photo } from "src/app/models/photo.model.interface";


export const loadPhotos = createAction(
  '[Photo List] load photos'
)

export const loadedPhotos = createAction(
  '[Photo List] loaded success',
  props<{photos: Photo[]}>()
)
