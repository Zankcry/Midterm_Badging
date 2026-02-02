import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UpperCasePipe, JsonPipe } from '@angular/common';

@Component({
  selector: 'app-contact',
  imports: [FormsModule, UpperCasePipe, JsonPipe],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  name: string = '';
  email: string = '';
  message: string = '';
  submitted: boolean = false;

  onSubmit() {
    this.submitted = true;
    // In a real app, we would send the data here.
    console.log('Form Submitted!', { name: this.name, email: this.email, message: this.message });
  }
}
