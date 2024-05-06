import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ServiceService } from 'src/app/services/service.service';
import { LogInProva } from 'src/app/shared/models/log-in-prova';
import { UserDto } from 'src/app/shared/models/user.dto';
import { UtenteDto } from 'src/app/shared/models/utente.dto';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})

export class LoginComponent {

  constructor(private authService: AuthService, private router: Router,private service: ServiceService, private logInProva: LogInProva){}
  
  isLoginMode: boolean = true;
  name: string = '';
  email: string = '';
  password: string = '';

  onSubmit() {

    if(this.isLoginMode){
      const user = new UtenteDto();
      user.setEmail(this.email)
      user.setPassword(this.password)
      this.service.userLogin(user).subscribe((response: any)  => {
        console.log(response)
        this.logInProva.islogged=Boolean(response)
      }, error => console.log("error"));
      console.log("logInProva value : "+this.logInProva.islogged)
      //this.authService.login(user)
      if(this.authService.authenticated()){
        this.router.navigate(['/home'])
      } else {
        const toast = document.getElementById('toast');
        if (toast) {
          toast.innerText = "Errore LogIn";
          toast.style.display = 'block';
          setTimeout(() => {
              toast.style.display = 'none';
          }, 3000);
        }
      } 
    }
    else{
      const user = new UserDto();
      user.setNome(this.name)
      user.setEmail(this.email)
      user.setPassword(this.password)
      this.authService.registrazione(user)
      if(this.authService.authenticated()){
        this.router.navigate(['/home'])
      } else {
        const toast = document.getElementById('toast');
        if (toast) {
          toast.innerText = "Errore Registrazione";
          toast.style.display = 'block';
          setTimeout(() => {
            toast.style.display = 'none';
          }, 3000);
        }
      }
    }
    
  }

  switch() {
    this.isLoginMode = !this.isLoginMode;
  }
}
