import { Component } from '@angular/core';
import { HotelService } from 'src/app/services/hotel/hotel.service';
import { ServiceService } from 'src/app/services/service.service';
import { HotelDto } from 'src/app/shared/models/hotel.dto';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.scss']
})
export class HotelComponent {
  //hotels: test[] = [];


  constructor(private hotelSevice: HotelService, private service: ServiceService){}
  
  hotel(){

    //this.hotels = this.hotelSevice.hotelCity(this.hotelSevice.city)

     this.service.hotelCity(this.hotelSevice.city).subscribe((response: any)  => {
      console.log(response)
      for(let i=0; i<response.length; i++){
        console.log(response[i].name);
      }
    }, error => console.log("error"));
  }

}
