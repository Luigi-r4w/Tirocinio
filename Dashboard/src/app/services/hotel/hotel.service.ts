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

  hotelCity(city: string){

    this.service.hotelCity(city).subscribe((response: any)  => {
      this.hotels.length=0
      console.log(response)
      for(let i=0; i<response.length; i++){
        this.hotels[i] = new HotelDto(response[i].name, response[i].address, response[i].city, response[i].link)
      }

    }, error => this.hotels.length=0);

    return this.hotels

  }

  delete(user: HotelDto){
    this.service.userDelete(user).subscribe(data => {console.log(data)})
    
  }
}
