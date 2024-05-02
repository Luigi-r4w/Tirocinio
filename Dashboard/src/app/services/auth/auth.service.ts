import { Injectable } from '@angular/core';
import { UserDto } from 'src/app/shared/models/user.dto';
import { UtenteDto } from 'src/app/shared/models/utente.dto';
import { ServiceService } from '../service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  logged = false
  email = ' '

  constructor(private service: ServiceService) { }

  authenticated(){
    return this.logged
  }

  registrazione(user: UserDto){
    this.service.newUser(user).subscribe(data => {console.log(data)})
    this.logged=true
    this.email = user.email
    return this.logged
  }

  login(user: UtenteDto){
    this.service.userLogin(user).subscribe(data => {console.log(data)})
    this.logged=true
    this.email = user.email
    return this.logged

  }

  delete(user: UtenteDto){
    this.service.userDelete(user).subscribe(data => {console.log(data)})
    this.logged=true
    this.email = user.email
  }

  logOut() {
    this.logged=false
    this.email = ' '
  }

}
