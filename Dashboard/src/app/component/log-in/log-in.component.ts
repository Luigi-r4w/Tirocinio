import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { UserDto } from 'src/app/shared/models/user.dto';
import { UtenteDto } from 'src/app/shared/models/utente.dto';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})

export class LoginComponent {
  
  isLoginMode: boolean = true;
  name: string = '';
  email: string = '';
  password: string = '';
  authService = new AuthService;

  onSubmit() {

    if(this.isLoginMode){
      console.log('Email:', this.email);
      console.log('Password:', this.password);
      const user = new UtenteDto();
      user.email= this.email
      user.password= this.password
      this.authService.login(user)
    }
    else{
      console.log('Nome:' ,this.name)
      console.log('Email:', this.email);
      console.log('Password:', this.password);
      const user = new UserDto();
      user.nome= this.name
      user.email=this.email
      user.password=this.password
      this.authService.registrazione(user)

    }
    
  }

  switch() {
    this.isLoginMode = !this.isLoginMode;
  }
}
