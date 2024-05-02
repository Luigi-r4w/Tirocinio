import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { UserDto } from 'src/app/shared/models/user.dto';
import { UtenteDto } from 'src/app/shared/models/utente.dto';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})

export class LoginComponent {

  constructor(private authService: AuthService, private router: Router){}
  
  isLoginMode: boolean = true;
  name: string = '';
  email: string = '';
  password: string = '';

  onSubmit() {

    if(this.isLoginMode){
      const user = new UtenteDto();
      user.email= this.email
      user.password= this.password
      const ris = this.authService.login(user)
      if(ris){
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
      user.nome= this.name
      user.email=this.email
      user.password=this.password
      const ris = this.authService.registrazione(user)
      if(ris){
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
