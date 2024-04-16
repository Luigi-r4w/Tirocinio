package com.example.Server;

import com.example.Server.dto.Hotel;
import com.example.Server.dto.User;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.ArrayList;

@SpringBootApplication
public class ServerApplication {

	public static void main(String[] args) {
		SpringApplication.run(ServerApplication.class, args);
		com.example.Server.dto.User user = new User("paperino", "paperino@mail.com", "123");
		if (!new com.example.Server.dao.UserDAO().NewUser(user))
			System.out.println("error NewUser");
		if (!new com.example.Server.dao.UserDAO().Autentificazione(user.getEmail(),user.getPassword())) {
			System.out.println("error Autentificazione");
		} else {
			System.out.println("ciao "+user.getNome());
		}
		com.example.Server.dto.Hotel hotel = new Hotel("a", "a","a","a");
		if(!new com.example.Server.dao.HotelDAO().NewHotel(hotel))
			System.out.println("error NewHotel");
		ArrayList<Hotel> hotels = new com.example.Server.dao.HotelDAO().HotelCity("a");
		if (hotels.isEmpty()){
			System.out.println("non ci sono hotel");
		}	else {
			for(Hotel h : hotels){
				System.out.println(h.getName() );
			}
		}
		if(!new com.example.Server.dao.HotelDAO().DeleteHotel(hotel))
			System.out.println("error DeleteHotel");
		if (!new com.example.Server.dao.UserDAO().DeleteUser(user))
			System.out.println("error DeleteUser");
		if (!new com.example.Server.dao.UserDAO().Autentificazione(user.getEmail(),user.getPassword())) {
			System.out.println("error Autentificazione");
		} else {
			System.out.println("ciao "+user.getNome());
		}
		hotels = new com.example.Server.dao.HotelDAO().HotelCity("a");
		if (hotels.isEmpty()){
			System.out.println("non ci sono hotel");
		}	else {
			for(Hotel h : hotels){
				System.out.println(h.getName() );
			}
		}




	}

}
