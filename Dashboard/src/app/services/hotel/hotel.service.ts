import { Injectable } from '@angular/core';
import { ServiceService } from '../service.service';
import { HotelDto } from 'src/app/shared/models/hotel.dto';
import { HotelInfoDto } from 'src/app/shared/models/hotelInfo.dto';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class HotelService {

  city: string = ''
  hotels: HotelDto[] = [];
  idHotel: string = '' 
  hotelInfo: HotelInfoDto | undefined;

  constructor(private service: ServiceService, private router: Router,) { }
  
  newHotel(hotel: HotelDto){
    this.service.hotelNew(hotel).subscribe(data => {console.log(data)})
    
  }

  hotelCity(city: string){

    this.service.hotelCity(city).subscribe((response: any)  => {
      this.hotels.length=0
      console.log(response)
      for(let i=0; i<response.length; i++){
        this.hotels[i] = new HotelDto(response[i].name, response[i].id, response[i].city, response[i].main_photo_url, response[i].city_research)
      }

    }, error => this.hotels.length=0);

    return this.hotels

  }

  delete(user: HotelDto){
    this.service.userDelete(user).subscribe(data => {console.log(data)})
    
  }

  info(){
    this.service.info(this.idHotel).subscribe((response: any) => {
      console.log("response "+response)
      this.hotelInfo = new HotelInfoDto(response.hotel_name, response.address, response.city, response.zip, response.country_trans, response.timezone, response.currency_code, response.url)
      console.log("hotel info = "+this.hotelInfo)
      this.hotelDetails()
    })
  }

  hotelDetails(){
    this.router.navigate(['/component/info'])
  }
}
