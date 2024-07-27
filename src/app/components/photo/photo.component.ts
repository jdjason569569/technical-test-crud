import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { GlobalState } from 'src/app/models/global.model.interface';
import { Photo } from 'src/app/models/photo.model.interface';
import { selectListPhotos } from 'src/app/ngrx-store/photos/photo.selectors';
import { deletePhoto, loadPhotos } from 'src/app/ngrx-store/photos/photos.actions';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css'],
})
export class PhotoComponent implements OnInit {
  page: number = 1;
  photos$: Observable<Photo[]> = new Observable();

  constructor(private store: Store<GlobalState>) {
    this.photos$ = this.store.select(selectListPhotos);
  }

  public deletePhoto(id: number){
    this.store.dispatch(deletePhoto({id}));
  }

  ngOnInit(): void {
    this.store.dispatch(loadPhotos());
  }
}
