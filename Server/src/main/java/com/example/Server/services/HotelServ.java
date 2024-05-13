package com.example.Server.services;

import java.util.ArrayList;

import com.example.Server.dao.HotelDAO;
import com.example.Server.dto.Hotel;
import com.example.Server.dto.HotelInfo;

public class HotelServ {
    HotelDAO hotelDao = new HotelDAO();
    HotelApi hotelApi = new HotelApi();

    public ArrayList<Hotel> hotelCity(String city){
        ArrayList<Hotel> hotels; 
        hotels = hotelDao.HotelCity(city);
        if(hotels.size()==0){
            try{
                hotels = hotelApi.hotelApiCity(city);
                for (Hotel hotel : hotels) {
                    newHotel(hotel);
                }
                return hotels;

            } catch(Exception e){
                System.out.println(e);
                return hotels;
            }
        } else{
            return hotels;
        }

    }

    public void newHotel(Hotel hotel_) throws Exception {
        hotelDao.NewHotel(hotel_);
    }

    public void deleteHotel(Hotel hotel_) throws Exception{
        hotelDao.DeleteHotel(hotel_);
    }

    public HotelInfo info(String id) {
        return hotelApi.info(id);
    }
}
