package com.example.Server.requester;

import java.util.ArrayList;

import org.springframework.web.bind.annotation.*;

import com.example.Server.dto.Hotel;
import com.example.Server.dto.HotelInfo;
import com.example.Server.services.HotelServ;

@RestController
@RequestMapping("/hotel")
public class HotelReq {
    HotelServ hotel = new HotelServ();

    @GetMapping("/{city}")
    public ArrayList<Hotel> hotelCity(@PathVariable String city){
        return hotel.hotelCity(city);
    }

    @PostMapping("/")
    public void newHotel(@RequestBody Hotel hotel_) throws Exception {
        hotel.newHotel(hotel_);
    }

    @PostMapping("/delete")
    public void deleteHotel(@RequestBody Hotel hotel_) throws Exception{
        hotel.deleteHotel(hotel_);
    }

    @GetMapping("/info/{id}")
    public HotelInfo infoHotel(@PathVariable String id) throws Exception{
        return hotel.info(id);
    }
}
