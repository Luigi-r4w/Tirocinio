import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HotelDto } from '../shared/models/hotel.dto';
import { Observable } from 'rxjs';
import { Response } from '../shared/models/response';
import { HotelInfoDto } from '../shared/models/hotelInfo.dto';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  hotels: HotelDto[] = [];


  url= 'http://localhost:8080/';

  constructor(private Http: HttpClient) { }

  newUser( body: {}) : Observable<Response>{
    return this.Http.post<Response>(this.url+'user/', body)
  }

  userLogin( body: {}) : Observable<Response>{
    return this.Http.post<Response>(this.url+'user/authentication', body)
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

  info(id: string){
    return this.Http.get<HotelInfoDto>(this.url+'hotel/info/'+id)
  }
}
