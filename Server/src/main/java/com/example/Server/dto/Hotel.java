package com.example.Server.dto;

public class Hotel {

    private String name;
    private String id;
    private String city;

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
    

    public Hotel(String name, String id, String city){
        this.name = name;
        this.id = id;
        this.city = city;
    }
   

}
