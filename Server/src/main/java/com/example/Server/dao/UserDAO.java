package com.example.Server.dao;


import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

import com.example.Server.dto.User;

public class UserDAO {

    public ResultSet NewUser(User utente) throws Exception {
        Connection con = null;
        String sql = "Insert into user VALUES(?,?,?,)";
        con = dbConnection.getConnection();
        PreparedStatement p1 = con.prepareStatement(sql);
        p1.setString(1, utente.getNome());
        p1.setString(2, utente.getEmail());
        p1.setString(3, utente.getPassword());
        ResultSet rs1 = p1.executeQuery();
        con.close();
        rs1.close();
        return rs1;
    }

    public User AutentificazioneVenditore(String email, String pass) throws Exception {
        Connection con = null;
        String sql = "select * from venditore where email = ? AND password = ?";
        con = dbConnection.getConnection();
        PreparedStatement p1 = con.prepareStatement(sql);
        p1.setString(1, email.trim());
        p1.setString(2, pass.trim());
        ResultSet rs = p1.executeQuery();
        rs.beforeFirst();
        con.close();
        User venditore = null;
        while (rs.next()){
            venditore = new User(rs.getString(1), rs.getString(2), rs.getString(3), rs.getString(4), rs.getString(5), rs.getString(6));
        }
        return venditore;
    }

}
