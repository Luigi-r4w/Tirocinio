import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HotelDto } from '../shared/models/hotel.dto';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  hotels: HotelDto[] = [];


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

  hotelCity(city: string) : Observable<HotelDto[]> {
    return this.Http.get<HotelDto[]>(this.url+'hotel/'+city)
  }

  hotelNew(body: {}){
    return this.Http.post(this.url+'hotel/', body)
  }

  hotelDelete(body: {}){
    return this.Http.post(this.url+'hotel/delete', body)
  }
}
