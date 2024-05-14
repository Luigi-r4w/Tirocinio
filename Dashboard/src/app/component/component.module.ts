import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ComponentsRoutes } from './component.routing';
import {MatFormFieldModule} from '@angular/material/form-field';
import { HotelComponent } from './hotel/hotel.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './log-in/log-in.component';
import { HotelInfoComponent } from './hotelInfo/hotel-info/hotel-info.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';



@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ComponentsRoutes),
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    MatFormFieldModule,
    MatCardModule, 
    MatButtonModule,

  ],
  declarations: [
    LoginComponent,
    HotelComponent,
    HomeComponent,
    HotelInfoComponent
  ],
})
export class ComponentsModule { }
