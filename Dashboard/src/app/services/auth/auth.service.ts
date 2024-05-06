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
  email = ''

  constructor(private service: ServiceService, private Http: HttpClient, private router: Router) { }

  authenticated(){
    return this.logged
  }

  setLogged(value: boolean){
    this.logged=value
  }

  registrazione(user: UserDto){

    this.service.newUser(user).subscribe(data => {console.log(data)
        this.setLogged(Boolean(data))
    })
    this.email = user.getEmail()
    
  }

  login(user: UtenteDto){

    /* this.service.userLogin(user).subscribe(data => {console.log(data)
      this.setLogged(Boolean(data))
    })
    this.email = user.getEmail()
    */
    
    console.log("inizio logIn auth.service")
    this.Http.post('http://localhost:8080/user/authentication', user).subscribe(data => {console.log(data)
      this.setLogged(Boolean(data))
      console.log("set logged : "+this.logged)
    })
    console.log("fine logIn auth.service")
  }
  
/*
  login(user: UtenteDto) {
    const successo =  this.service.userLogin(user).subscribe(data => {
      console.log(data)
      if(data.toString()=='true')
        this.setLogged(true)
        console.log("auth: "+this.authenticated())
      })
      if (successo) {
        console.log('Login effettuato con successo');
        return true
      } else {
        console.log('Login fallito');
        return false
      }
  }
  */

  delete(user: UtenteDto){
    this.service.userDelete(user).subscribe(data => {console.log(data)})
    this.logged=false
    this.email = ''
    this.router.navigate(['/component/logIn'])
  }

  logOut() {
    this.logged=false
    this.email = ''
    this.router.navigate(['/component/logIn'])
  }

}
