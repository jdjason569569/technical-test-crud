import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { PhotosService } from 'src/app/services/photo.service';
import { loadPhotos } from './photos.actions';
import { catchError, EMPTY, map, mergeMap } from 'rxjs';


@Injectable()
export class PhotosEffects {
  constructor(private actions$: Actions, private photoService: PhotosService) {}


  loadPhotos$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadPhotos),
      mergeMap(() =>
        this.photoService.getPhotos().pipe(
          map((photos) => ({ type: '[Photo List] loaded success', photos })),
          catchError(() => EMPTY)
        )
      )
    )
  );

}
