package com.example.Server.requester;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.example.Server.dao.UserDAO;


public class User {
    UserDAO user = new UserDAO();
/* 
    @PutMapping("/{user}/{pass}")
    public User getUtenti(@PathVariable("user") String user, @PathVariable("pass") String pass) throws Exception {
        return user.Autentificazione(user, pass);
    }

    @PostMapping("/")
    public void addUtente(@RequestBody User user) throws Exception {
        user.NewUser(user);
    }
*/
}
