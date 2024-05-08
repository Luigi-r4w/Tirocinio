package com.example.Server.services;

import com.example.Server.dao.UserDAO;
import com.example.Server.dto.Response;
import com.example.Server.dto.User;

public class UserServ {
    UserDAO utente = new UserDAO();

    public Response authentication(String user, String pass) throws Exception {
        return utente.Authentication(user, pass);
    } 

    public Response newUser(User user) throws Exception {
        return utente.NewUser(user);
    }

    public void deleteUser(User user) throws Exception{
        utente.DeleteUser(user);
    }

}
