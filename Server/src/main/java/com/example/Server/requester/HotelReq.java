package com.example.Server.requester;

import java.util.ArrayList;

import org.springframework.web.bind.annotation.*;

import com.example.Server.dao.HotelDAO;
import com.example.Server.dto.Hotel;

@RestController
@RequestMapping("/hotel")
public class HotelReq {
    HotelDAO hotel = new HotelDAO();

    @GetMapping("/{city}")
    public ArrayList<Hotel> hotelCity(@PathVariable String city){
        return hotel.HotelCity(city);
    }

    @PostMapping("/")
    public void newHotel(@RequestBody Hotel hotel_) throws Exception {
        hotel.NewHotel(hotel_);
    }

    @PostMapping("/")
    public void deleteHotel(@RequestBody Hotel hotel_) throws Exception{
        hotel.DeleteHotel(hotel_);
    }
}
