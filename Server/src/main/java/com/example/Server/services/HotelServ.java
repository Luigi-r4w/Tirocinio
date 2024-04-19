package com.example.Server.services;

import java.util.ArrayList;

import com.example.Server.dao.HotelDAO;
import com.example.Server.dto.Hotel;

public class HotelServ {
    HotelDAO hotel = new HotelDAO();

    public ArrayList<Hotel> hotelCity(String city){
        return hotel.HotelCity(city);
    }

    public void newHotel(Hotel hotel_) throws Exception {
        hotel.NewHotel(hotel_);
    }

    public void deleteHotel(Hotel hotel_) throws Exception{
        hotel.DeleteHotel(hotel_);
    }
}
