import { Component, OnInit } from '@angular/core';
import { AsyncPipe, SlicePipe, UpperCasePipe } from '@angular/common';
import { DataService, Post } from '../data.service';
import { Observable } from 'rxjs';
import { TruncatePipe } from '../truncate.pipe';

@Component({
  selector: 'app-home',
  imports: [AsyncPipe, SlicePipe, UpperCasePipe, TruncatePipe],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {
  posts$!: Observable<Post[]>;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.posts$ = this.dataService.getPosts();
  }
}
