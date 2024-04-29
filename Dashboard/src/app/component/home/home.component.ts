import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(private authService: AuthService, private router: Router) {}

  isLoginMode: boolean = this.authService.logged;

  onClick() {

    if(this.authService.logged){

      
    }else{
      this.router.navigate(['/component/logIn'])
    }
  }
  

}
