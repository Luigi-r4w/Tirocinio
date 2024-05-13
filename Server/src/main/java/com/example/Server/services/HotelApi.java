package com.example.Server.services;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URI;
import java.net.URL;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

import org.json.JSONObject;

import com.example.Server.dao.HotelDAO;
import com.example.Server.dto.Hotel;
import com.example.Server.dto.HotelInfo;
import com.google.gson.Gson;


public class HotelApi {
    HotelDAO hotel = new HotelDAO();

    /* 
    public ArrayList<Hotel> hotelApiCity(String city) throws IOException, InterruptedException{
        
        String cityId = CityID(city);
        ArrayList<Hotel> hotels = new ArrayList<Hotel>();
    
        HttpRequest request = HttpRequest.newBuilder()
		.uri(URI.create("https://booking-com.p.rapidapi.com/v1/hotels/search?checkout_date=2024-09-15&order_by=popularity&filter_by_currency=AED&room_number=1&dest_id="+cityId+"&dest_type=city&adults_number=2&checkin_date=2024-09-14&locale=en-gb&units=metric&include_adjacency=true&children_number=2&categories_filter_ids=class%3A%3A2%2Cclass%3A%3A4%2Cfree_cancellation%3A%3A1&page_number=0&children_ages=5%2C0"))
		.header("X-RapidAPI-Key", "293acc30c2msh2762dd407645365p1b0a5djsnded21308c160")
		.header("X-RapidAPI-Host", "booking-com.p.rapidapi.com")
		.method("GET", HttpRequest.BodyPublishers.noBody())
		.build();
        HttpResponse<String> response = HttpClient.newHttpClient().send(request, HttpResponse.BodyHandlers.ofString());
        System.out.println(response.body());
        


            
        for(int i=0; i<response.body().length(); i++){  
            Hotel hotelResponde = new Hotel(Name, Id, city);
            hotels.add(hotelResponde);
        }
    
        return hotels;
    } */

    public String CityID(String city) throws IOException, InterruptedException{

        /* 
        HttpRequest request = HttpRequest.newBuilder()
		.uri(URI.create("https://booking-com.p.rapidapi.com/v1/hotels/locations?name="+city+"&locale=en-gb"))
		.header("X-RapidAPI-Key", "293acc30c2msh2762dd407645365p1b0a5djsnded21308c160")
		.header("X-RapidAPI-Host", "booking-com.p.rapidapi.com")
		.method("GET", HttpRequest.BodyPublishers.noBody())
		.build();
        HttpResponse<String> response = HttpClient.newHttpClient().send(request, HttpResponse.BodyHandlers.ofString());        
        Gson gson = new Gson();
        Location[] locations = gson.fromJson(response.body(), Location[].class);
        String id = locations[0].getDest_id();

        return id;
        */
        return "-111459";
    }


    public ArrayList<Hotel> hotelApiCity(String city) throws Exception {
        ArrayList<Hotel> hotels = new ArrayList<Hotel>();



        String url = "https://booking-com.p.rapidapi.com/v1/hotels/search?checkout_date=2024-09-15&order_by=popularity&filter_by_currency=AED&room_number=1&dest_id="+city+"&dest_type=city&adults_number=2&checkin_date=2024-09-14&locale=en-gb&units=metric&include_adjacency=true&children_number=2&categories_filter_ids=class%3A%3A2%2Cclass%3A%3A4%2Cfree_cancellation%3A%3A1&page_number=0&children_ages=5%2C0";
        URL obj = new URL(url);
        HttpURLConnection con = (HttpURLConnection) obj.openConnection();
        Map<String, String> headers = new HashMap<>();

    headers.put("X-RapidAPI-Key", "293acc30c2msh2762dd407645365p1b0a5djsnded21308c160");
    headers.put("X-RapidAPI-Host", "booking-com.p.rapidapi.com");

    for (String headerKey : headers.keySet()) {
        con.setRequestProperty(headerKey, headers.get(headerKey));
    }
        con.setRequestMethod("GET");
        con.setRequestProperty("User-Agent", "Mozilla/5.0");
        int responseCode = con.getResponseCode();
        System.out.println("\nSending 'GET' request to URL : " + url);
        System.out.println("Response Code : " + responseCode);
        BufferedReader in = new BufferedReader(
                new InputStreamReader(con.getInputStream()));
        String inputLine;
        StringBuffer response = new StringBuffer();
        while ((inputLine = in.readLine()) != null) {
            response.append(inputLine);
        }
        in.close();
        //print in String
        System.out.println(response.toString());
        //Read JSON response and print
        JSONObject myResponse = new JSONObject(response.toString());
        System.out.println("result after Reading JSON Response");
        JSONObject res = (JSONObject) myResponse.get("");

        return hotels;
    }
    
    public HotelInfo info(String id){
        HotelInfo hotelInfo = new HotelInfo();


        return hotelInfo;
    }

}

class Location {
    private String dest_id;
   
    public String getDest_id() {
        return dest_id;
    }

    public void setDest_id(String dest_id) {
        this.dest_id = dest_id;
    }

}


class HotelRes {
    private String name;
   
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

}



