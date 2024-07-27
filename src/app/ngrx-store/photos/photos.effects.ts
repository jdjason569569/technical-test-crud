import { Injectable } from '@angular/core';
import { Actions } from '@ngrx/effects';
import { PhotosService } from 'src/app/services/photo.service';


@Injectable()
export class PhotosEffects {
  constructor(private actions$: Actions, private photoService: PhotosService) {}



}
