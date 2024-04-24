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



@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ComponentsRoutes),
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    MatFormFieldModule
  ],
  declarations: [
    LoginComponent,
    HotelComponent,
    HomeComponent
  ],
})
export class ComponentsModule { }
