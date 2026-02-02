import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, shareReplay } from 'rxjs';

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/posts';
  private postsCache$: Observable<Post[]> | null = null;

  constructor(private http: HttpClient) { }

  getPosts(): Observable<Post[]> {
    if (!this.postsCache$) {
      this.postsCache$ = this.http.get<Post[]>(this.apiUrl).pipe(
        shareReplay(1)
      );
    }
    return this.postsCache$;
  }
}
