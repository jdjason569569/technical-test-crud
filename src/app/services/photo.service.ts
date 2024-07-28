import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Photo } from '../models/photo.model.interface';

/**
 * Allows you to bring information from an external API
 */

@Injectable({
  providedIn: 'root',
})
export class PhotosService {
  constructor(private http: HttpClient) {}

  public getPhotos(){
    return this.http.get('https://jsonplaceholder.typicode.com/photos');
  }

  public deletePhoto(id: number){
    return this.http.delete(`https://jsonplaceholder.typicode.com/photos/${id}`);
  }

  public createPhoto(photo: Photo) {
    return this.http.post<Photo>('https://jsonplaceholder.typicode.com/photos', photo);
  }
}
