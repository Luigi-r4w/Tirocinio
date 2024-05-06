import { Injectable } from '@angular/core';
import { ServiceService } from '../service.service';
import { HotelDto } from 'src/app/shared/models/hotel.dto';

@Injectable({
  providedIn: 'root'
})
export class HotelService {

  city: string = ''
  hotels: HotelDto[] = [];


  constructor(private service: ServiceService) { }
  
  newHotel(hotel: HotelDto){
    this.service.hotelNew(hotel).subscribe(data => {console.log(data)})
    
  }

  /*hotelCity(city: string){
    this.service.hotelCity(city).subscribe(data => {console.log(data)
      this.hotels=data
    })
    return this.hotels
  }*/

  delete(user: HotelDto){
    this.service.userDelete(user).subscribe(data => {console.log(data)})
    
  }
}
