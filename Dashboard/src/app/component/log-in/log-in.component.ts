import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ServiceService } from 'src/app/services/service.service';
import { UserDto } from 'src/app/shared/models/user.dto';
import { UtenteDto } from 'src/app/shared/models/utente.dto';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})

export class LoginComponent {

  constructor(private authService: AuthService, private router: Router,private service: ServiceService){}
  
  isLoginMode: boolean = true;
  name: string = '';
  email: string = '';
  password: string = '';

  switch() {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit() {

    if(this.isLoginMode){
      const user = new UtenteDto();
      user.setEmail(this.email)
      user.setPassword(this.password)
      this.authService.login(user)

    }
    else{
      const user = new UserDto();
      user.setNome(this.name)
      user.setEmail(this.email)
      user.setPassword(this.password)
      this.authService.registrazione(user)  
    }
    
  }



}


