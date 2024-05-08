import { Injectable } from '@angular/core';
import { UserDto } from 'src/app/shared/models/user.dto';
import { UtenteDto } from 'src/app/shared/models/utente.dto';
import { ServiceService } from '../service.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  private logged = false
  nome = ''

  constructor(private service: ServiceService, private Http: HttpClient, private router: Router,) { }

  authenticated(){
    return this.logged
  }

  setLogged(value: boolean){
    this.logged=value
  }

  registrazione(user: UserDto){

    this.service.newUser(user).subscribe((data : any) => {
      
      console.log(data)
      if(data.code=="200"){
        this.setLogged(true)
        this.autenticazione()
      } else {
        this.toast(data.messaggio)
      }
      
    })
    this.nome = user.getNome()
    
  }

  login(user: UtenteDto){

    this.service.userLogin(user).subscribe((data : any) => {
      
      console.log(data)
      if(data.code=="200"){
        this.setLogged(true)
        this.nome=data.messaggio
        this.autenticazione()
      } else {
        this.toast(data.messaggio)
      }
      
    })
  }

  delete(user: UtenteDto){
    this.service.userDelete(user).subscribe(data => {console.log(data)})
    this.logged=false
    this.nome = ''
    this.router.navigate(['/component/logIn'])
  }

  logOut() {
    this.logged=false
    this.nome = ''
    this.router.navigate(['/component/logIn'])
  }

  autenticazione() {
    if(this.authenticated()){
      this.router.navigate(['/home'])
    } else {
      this.toast("auth")
    }
  }

  toast(text: string){
    const toast = document.getElementById('toast');
      if (toast) {
        toast.innerText = text;
        toast.style.display = 'block';
        setTimeout(() => {
          toast.style.display = 'none';
        }, 3000);
      }
  }

}
