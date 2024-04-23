import { Component } from '@angular/core';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})

export class LoginComponent {
  name: string = '';
  email: string = '';
  password: string = '';

  onSubmit() {

    console.log('Name:', this.name);
    console.log('Email:', this.email);
    console.log('Password:', this.password);
    
  }
}
