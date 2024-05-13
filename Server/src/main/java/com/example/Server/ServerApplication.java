package com.example.Server;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.example.Server.services.HotelApi;

@SpringBootApplication
public class ServerApplication {

	public static void main(String[] args) throws Exception {
		SpringApplication.run(ServerApplication.class, args);
		HotelApi api = new HotelApi();
		api.hotelApiCity("-111459");
	}

}
