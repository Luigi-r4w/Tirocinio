package com.example.Server.dao;


import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import com.example.Server.dto.Response;
import com.example.Server.dto.User;

public class UserDAO {

    public Response NewUser(User utente) {
        Response res = new Response();
        try {
            Connection con = null;
            String sql = "Insert into utente VALUES(?,?,?)";
            con = dbConnection.getConnection();
            PreparedStatement p1 = con.prepareStatement(sql);
            p1.setString(1, utente.getNome());
            p1.setString(2, utente.getEmail());
            p1.setString(3, utente.getPassword());
            p1.executeUpdate();
            con.close();
            res.setCode("200");
            return res;
        }
        catch (SQLException e){
            System.out.println(e);
            res.setCode("400");
            res.setMessaggio(e.getMessage().split("\n")[1].replace("(", " ").replace(")", " "));
            return res;
        }

    }

    public Response Authentication(String email, String pass){
        Response res = new Response();
        try {
            Connection con = null;
            String sql = "select * from utente where email = ? AND password = ?";
            con = dbConnection.getConnection();
            PreparedStatement p1 = con.prepareStatement(sql);
            p1.setString(1, email);
            p1.setString(2, pass);
            ResultSet rs = p1.executeQuery();
            con.close();
            if (!rs.next()){
                res.setCode("400");
                res.setMessaggio("User not foud");
                return res;
            }
            res.setCode("200");
            res.setMessaggio(rs.getString(1));
            return res;
        }
        catch (SQLException e){
            System.out.println(e);
            res.setCode("400");
            res.setMessaggio(e.getMessage().split("\n")[1].replace("(", " ").replace(")", " "));
            return res;
        }

    }
    public Boolean DeleteUser(User utente) {
        try {
            Connection con = null;
            String sql = "Delete from utente where email=? ";
            con = dbConnection.getConnection();
            PreparedStatement p1 = con.prepareStatement(sql);
            p1.setString(1, utente.getEmail());
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
