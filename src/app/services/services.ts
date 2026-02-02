import { Component, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { AsyncPipe } from '@angular/common';
import { DataService, Post } from '../data.service';
import { Observable, combineLatest, map, startWith, catchError, of, ignoreElements } from 'rxjs';

@Component({
  selector: 'app-services',
  imports: [ReactiveFormsModule, AsyncPipe],
  templateUrl: './services.html',
  styleUrl: './services.css',
})
export class Services implements OnInit {
  searchControl = new FormControl('');
  filteredPosts$!: Observable<Post[]>;
  error$!: Observable<string>;
  loading = true; // Simple loading state for initial load

  constructor(private dataService: DataService) {}

  ngOnInit() {
    const posts$ = this.dataService.getPosts().pipe(
      catchError(err => {
        this.error$ = of('Failed to load service records.');
        return of([]);
      })
    );

    const searchTerm$ = this.searchControl.valueChanges.pipe(
      startWith('')
    );

    this.filteredPosts$ = combineLatest([posts$, searchTerm$]).pipe(
      map(([posts, term]) => { // 'term' could be null, handle safety
        this.loading = false;
        const searchTerm = (term || '').toLowerCase();
        return posts.filter(post =>
          post.title.toLowerCase().includes(searchTerm) ||
          post.body.toLowerCase().includes(searchTerm)
        );
      })
    );
  }
}
