import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

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
}
