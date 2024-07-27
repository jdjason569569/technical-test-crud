import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { PhotosService } from 'src/app/services/photo.service';
import {
  deletePhoto,
  deletePhotoSuccess,
  loadedPhotos,
  loadPhotos,
} from './photos.actions';
import { catchError, EMPTY, map, switchMap } from 'rxjs';

@Injectable()
export class PhotosEffects {
  constructor(private actions$: Actions, private photoService: PhotosService) {}

  loadPhotos$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadPhotos),
      switchMap(() =>
        this.photoService.getPhotos().pipe(
          map((photos: any) => loadedPhotos({ photos })),
          catchError(() => EMPTY)
        )
      )
    )
  );

  deletePhoto$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deletePhoto),
      switchMap((action) =>
        this.photoService.deletePhoto(action.id).pipe(
          map(() => deletePhotoSuccess({ id: action.id })),
          catchError(() => EMPTY)
        )
      )
    )
  );
}
