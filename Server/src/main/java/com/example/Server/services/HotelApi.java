package com.example.Server.services;

import java.io.IOException;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.util.ArrayList;

import com.example.Server.dao.HotelDAO;
import com.example.Server.dto.Hotel;
import com.example.Server.dto.HotelInfo;
import com.example.Server.services.HotelRes.HotelInfoRes;
import com.google.gson.Gson;


public class HotelApi {
    HotelDAO hotel = new HotelDAO();

    public ArrayList<Hotel> hotelApiCity(String city) throws IOException, InterruptedException{
        
        String cityId = CityID(city);
        ArrayList<Hotel> hotels = new ArrayList<Hotel>();
    
        HttpRequest request = HttpRequest.newBuilder()
		.uri(URI.create(""))
		.header("", "")
		.header("", "")
		.method("GET", HttpRequest.BodyPublishers.noBody())
		.build();
        HttpResponse<String> response = HttpClient.newHttpClient().send(request, HttpResponse.BodyHandlers.ofString());
        Gson gson = new Gson();
        HotelRes hotelRes = gson.fromJson(response.body(), HotelRes.class);
        
        ArrayList<HotelInfoRes> result = hotelRes.getResults();
        
        for (HotelInfoRes hotelInfoRes : result) {
            String id = hotelInfoRes.getId();
            String name = hotelInfoRes.getName();
            String cityy = hotelInfoRes.getCity();
            String main_photo_url = hotelInfoRes.getMain_photo_url();

            Hotel hotelResponde = new Hotel(name, id, cityy, main_photo_url, city);
            hotels.add(hotelResponde);
        }
    
        return hotels;
    } 

    public String CityID(String city) throws IOException, InterruptedException{

        HttpRequest request = HttpRequest.newBuilder()
		.uri(URI.create(""))
		.header("", "")
		.header("", "")
		.method("GET", HttpRequest.BodyPublishers.noBody())
		.build();
        HttpResponse<String> response = HttpClient.newHttpClient().send(request, HttpResponse.BodyHandlers.ofString());  
        Gson gson = new Gson();
        Location[] locations = gson.fromJson(response.body(), Location[].class);
        int i = 0;

        while (!locations[i].getCity_name().equals(city)) {
            i++;
        }
        String id = locations[i].getDest_id();

        return id;
    }
    
    public HotelInfo info(String id) throws Exception {
        
        HotelInfo hotelInfo = new HotelInfo();
        HttpRequest request = HttpRequest.newBuilder()
		.uri(URI.create(""))
		.header("", "")
		.header("", "")
		.method("GET", HttpRequest.BodyPublishers.noBody())
		.build();
        HttpResponse<String> response = HttpClient.newHttpClient().send(request, HttpResponse.BodyHandlers.ofString());
        System.out.println(response.body());
        Gson gson = new Gson();
        hotelInfo = gson.fromJson(response.body(), HotelInfo.class);
        return hotelInfo;
    }

}

class Location {
    private String dest_id;

    private String name;
   
    public String getCity_name() {
        return name;
    }

    public void setCity_name(String city_name) {
        this.name = city_name;
    }

    public String getDest_id() {
        return dest_id;
    }

    public void setDest_id(String dest_id) {
        this.dest_id = dest_id;
    }

}

class HotelRes {


    private ArrayList<HotelInfoRes> result;

    /**
     * HotelInfoRes
     */
    public class HotelInfoRes {
        
        private String hotel_id;

        private String hotel_name;

        private String max_photo_url;

        private String city;


        public String getCity() {
            return city;
        }

        public void setCity(String city) {
            this.city = city;
        }

        public String getMain_photo_url() {
            return max_photo_url;
        }

        public void setMain_photo_url(String max_photo_url) {
            this.max_photo_url = max_photo_url;
        }

        public String getName() {
            return hotel_name;
        }

        public void setName(String hotel_name) {
            this.hotel_name = hotel_name;
        }

        public String getId() {
            return hotel_id;
        }

        public void setId(String id) {
            this.hotel_id = id;
        }

    }

    public ArrayList<HotelInfoRes> getResults() {
        return result;
    }

    public void setResults(ArrayList<HotelInfoRes> results) {
        this.result = results;
    }
}


