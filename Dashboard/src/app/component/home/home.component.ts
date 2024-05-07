import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { HotelService } from 'src/app/services/hotel/hotel.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  city: string = ''

  constructor(private authService: AuthService, private router: Router, private hotelService: HotelService) {}

  isLoginMode: boolean = this.authService.authenticated();

  onClick() {

    if(this.isLoginMode){
      this.hotelService.city = this.city
      this.router.navigate(['/component/hotel'])
    }else{
      this.router.navigate(['/component/logIn'])
    }
  }
  

}
