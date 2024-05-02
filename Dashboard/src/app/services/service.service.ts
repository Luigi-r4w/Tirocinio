import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  url= 'http://localhost:8080/';

  constructor(private Http: HttpClient) { }

  newUser( body: {}){
    return this.Http.post(this.url+'user/', body)
  }

  userLogin( body: {}){
    return this.Http.post(this.url+'user/authentication', body)
  }

  userDelete( body: {}){
    return this.Http.post(this.url+'user/delete', body)
  }

  hotelCity(city: string){
    return this.Http.get(this.url+city)
  }

  hotelNew(body: {}){
    return this.Http.get(this.url+'hotel/')
  }

  hotelDelete(body: {}){
    return this.Http.get(this.url+'hotel/delete')
  }
}
