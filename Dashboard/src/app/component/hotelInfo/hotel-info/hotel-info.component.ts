import { Component } from '@angular/core';
import { HotelService } from 'src/app/services/hotel/hotel.service';
import { HotelDto } from 'src/app/shared/models/hotel.dto';

@Component({
  selector: 'app-hotel-info',
  templateUrl: './hotel-info.component.html',
  styleUrls: ['./hotel-info.component.scss']
})
export class HotelInfoComponent {

  constructor(private hotelSevice: HotelService, ){}

  hotel: HotelDto | undefined

  ngOnInit(){

    
    
  }

}
