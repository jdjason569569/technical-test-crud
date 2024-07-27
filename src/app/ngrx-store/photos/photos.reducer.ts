import { createReducer, on } from "@ngrx/store";
import { PhotoState } from "../photo.state";


export const initialState: PhotoState = {photos: []}


export const photosReducer = createReducer(
  initialState,

)
