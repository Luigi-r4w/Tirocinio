package com.example.Server.dao;


import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

import com.example.Server.dto.Hotel;

public class HotelDAO {

    public ResultSet NewHotel(Hotel hotel) throws Exception {
        Connection con = null;
        String sql = "Insert into hotel VALUES(?,?,?,?)";
        con = dbConnection.getConnection();
        PreparedStatement p1 = con.prepareStatement(sql);
        p1.setString(1, hotel.getName());
        p1.setString(2, hotel.getAddress());
        p1.setString(3, hotel.getCity());
        p1.setString(4, hotel.getLink());
        ResultSet rs1 = p1.executeQuery();
        con.close();
        rs1.close();
        return rs1;
    }

    public ResultSet HotelCity(String city) throws Exception{
        Connection con = null;
        String sql = "Select * From hotel Where hotel.city=?";
        con = dbConnection.getConnection();
        PreparedStatement p1 = con.prepareStatement(sql);
        p1.setString(1, city);
        ResultSet rs1 = p1.executeQuery();
        con.close();
        rs1.close();
        return rs1;
    }

}
