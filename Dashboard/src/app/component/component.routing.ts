import { Routes } from '@angular/router';
import { LoginComponent } from './log-in/log-in.component';
import { HotelComponent } from './hotel/hotel.component';
import { HomeComponent } from './home/home.component';
import { authGuard } from '../services/auth/auth.guard';
import { noAuthGuard } from '../services/auth/no.auth.guard';
import { HotelInfoComponent } from './hotelInfo/hotel-info/hotel-info.component';



export const ComponentsRoutes: Routes = [
	{
		path: '',
		children: [
			{
				path: 'hotel',
				component: HotelComponent,
				canActivate: [authGuard]
			},
			{
				path: 'logIn',
				component: LoginComponent,
				canActivate: [noAuthGuard]
			},
			{
				path: 'home',
				component: HomeComponent
			},
			{
				path: 'info',
				component: HotelInfoComponent
			}
		]
	}
];
