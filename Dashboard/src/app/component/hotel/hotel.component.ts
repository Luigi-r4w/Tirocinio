import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HotelService } from 'src/app/services/hotel/hotel.service';
import { ServiceService } from 'src/app/services/service.service';
import { HotelDto } from 'src/app/shared/models/hotel.dto';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.scss']
})
export class HotelComponent {

  hotels: HotelDto[] = [];

  constructor(private hotelSevice: HotelService, private service: ServiceService, private router: Router){}
  
  ngOnInit(){

    this.hotels= this.hotelSevice.hotelCity(this.hotelSevice.city)
    
  }

  onClick() {
    this.router.navigate(['/home'])
  }
  

}
