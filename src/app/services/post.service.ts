import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor(private http: HttpClient) {}

  public getPost() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }
}
