package com.example.Server.dto;

public class Hotel {
    private String name;
    
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    private String address;

    public String getAddress() {
        return address;
    }
    public void setAddress(String address) {
        this.address = address;
    }
    private String city;

    public String getCity() {
        return city;
    }
    public void setCity(String city) {
        this.city = city;
    }
    private String link;
    
    public String getLink() {
        return link;
    }
    public void setLink(String link) {
        this.link = link;
    }

    public Hotel(String name, String address, String city,String link){
        this.name = name;
        this.address = address;
        this.city = city;
        this.link = link;
    }
   

}
