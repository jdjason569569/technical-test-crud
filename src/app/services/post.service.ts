import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from '../models/post.model.interface';

/**
 * Allows you to bring information from an external API
 */
@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor(private http: HttpClient) {}

  public getPost() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }

  public deletePost(id: number) {
    return this.http.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
  }

  public createPost(post: Post) {
    return this.http.post<Post>(
      'https://jsonplaceholder.typicode.com/posts',
      post
    );
  }
}
