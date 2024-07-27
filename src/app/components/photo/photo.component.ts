import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { GlobalState } from 'src/app/models/global.model.interface';
import { Photo } from 'src/app/models/photo.model.interface';
import { selectListPhotos } from 'src/app/ngrx-store/photos/photo.selectors';
import {
  deletePhoto,
  loadPhotos,
  newPhoto,
} from 'src/app/ngrx-store/photos/photos.actions';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css'],
})
export class PhotoComponent implements OnInit {
  page: number = 1;
  photos$: Observable<Photo[]> = new Observable();
  isMenu = false;
  form: FormGroup;

  constructor(
    private store: Store<GlobalState>,
    private formBuilder: FormBuilder
  ) {
    this.photos$ = this.store.select(selectListPhotos);
    this.form = this.formBuilder.group({
      title: ['', Validators.required],
      url: ['', [Validators.required]],
      id: ['', Validators.required],
    });
  }

  public deletePhoto(id: number) {
    this.store.dispatch(deletePhoto({ id }));
  }

  public newPhoto() {
    this.isMenu = !this.isMenu;
  }

  public onSubmit() {
    if (this.form.valid) {
      let photo: Photo = {
        id: this.form.get('id')?.value,
        title: this.form.get('title')?.value,
        url: this.form.get('url')?.value,
      };
      this.store.dispatch(newPhoto({ photo }));
      this.cleanVars();
    }
  }

  private cleanVars() {
    this.isMenu = false;
    this.form.reset();
  }

  ngOnInit(): void {
    this.store.dispatch(loadPhotos());
  }
}
