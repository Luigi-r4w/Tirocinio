package com.example.Server.dto;

public class Hotel {

    private String name;
    private String id;
    private String city;
    private String main_photo_url;

    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }

    public String getId() {
        return id;
    }
    public void setId(String id) {
        this.id = id;
    }

    public String getCity() {
        return city;
    }
    public void setCity(String city) {
        this.city = city;
    }
    

    public Hotel(String name, String id, String city, String main_photo_url){
        this.name = name;
        this.id = id;
        this.city = city;
        this.main_photo_url = main_photo_url;
    }
    public String getMain_photo_url() {
        return main_photo_url;
    }
    public void setMain_photo_url(String main_photo_url) {
        this.main_photo_url = main_photo_url;
    }
   

}
