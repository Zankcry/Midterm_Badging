import { Component } from '@angular/core';
import { DatePipe, LowerCasePipe } from '@angular/common';

@Component({
  selector: 'app-about',
  imports: [DatePipe, LowerCasePipe],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  currentDate = new Date();
  portalDescription = 'THIS IS A SAMPLE ANGULAR SPA DEMONSTRATING ROUTING, SHARED SERVICES, OBSERVABLES, AND PIPES.';
}
