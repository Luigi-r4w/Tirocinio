import { Routes } from '@angular/router';
import { LoginComponent } from './log-in/log-in.component';
import { HotelComponent } from './hotel/hotel.component';
import { HomeComponent } from './home/home.component';



export const ComponentsRoutes: Routes = [
	{
		path: '',
		children: [
			{
				path: 'hotel',
				component: HotelComponent
			},
			{
				path: 'logIn',
				component: LoginComponent
			},
			{
				path: 'home',
				component: HomeComponent
			}
		]
	}
];
