package com.example.Server.dao;


import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

import com.example.Server.dto.Hotel;


public class HotelDAO {

    public boolean NewHotel(Hotel hotel) {
        try{
            Connection con = null;
            String sql = "Insert into hotel VALUES(?,?,?,?)";
            con = dbConnection.getConnection();
            PreparedStatement p1 = con.prepareStatement(sql);
            p1.setString(1, hotel.getName());
            p1.setString(2, hotel.getAddress());
            p1.setString(3, hotel.getCity());
            p1.setString(4, hotel.getLink());
            p1.executeUpdate();
            con.close();
            return true;
        }
        catch (Exception e){
            System.out.println(e);
            return false;
        }

    }

    public ArrayList<Hotel> HotelCity(String city) {
        try {
            Connection con = null;
            String sql = "Select * From hotel Where hotel.city=?";
            con = dbConnection.getConnection();
            PreparedStatement p1 = con.prepareStatement(sql);
            p1.setString(1, city);
            ResultSet rs1 = p1.executeQuery();
            ArrayList<Hotel> hotel = new ArrayList<>();
            while(rs1.next()) {
                hotel.add(new Hotel(rs1.getString(1), rs1.getString(2), rs1.getString(3), rs1.getString(4)));
            }
            con.close();
            rs1.close();
            return hotel;
        }
        catch (Exception e){
            System.out.println(e);
            return null;
        }

    }
    public Boolean DeleteHotel(Hotel hotel) {
        try {
            Connection con = null;
            String sql = "Delete from hotel where name=? ";
            con = dbConnection.getConnection();
            PreparedStatement p1 = con.prepareStatement(sql);
            p1.setString(1, hotel.getName());
            p1.executeUpdate();
            con.close();
            return true;
        }
        catch (SQLException e){
            System.out.println(e);
            return false;
        }

    }

}
