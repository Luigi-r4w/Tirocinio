import { Injectable } from '@angular/core';
import { UserDto } from 'src/app/shared/models/user.dto';
import { UtenteDto } from 'src/app/shared/models/utente.dto';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  logged = false
  url = ''

  constructor() { }

  authenticated(){
    return this.logged
  }

  registrazione(user: UserDto){
     
  }

  login(user: UtenteDto){
     
  }
}
