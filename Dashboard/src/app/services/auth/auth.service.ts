import { Injectable } from '@angular/core';
import { UserDto } from 'src/app/shared/models/user.dto';
import { UtenteDto } from 'src/app/shared/models/utente.dto';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  logged = false

  constructor() { }

  authenticated(){
    return this.logged
  }

  registrazione(user: UserDto){

    this.logged=true

  }

  login(user: UtenteDto){

    this.logged=true

  }

  logOut() {
    this.logged=false
  }

}
