package com.example.Server.requester;

import org.springframework.web.bind.annotation.*;

import com.example.Server.dto.User;
import com.example.Server.services.UserServ;

@RestController
@RequestMapping("/user")
public class UserReq {
    UserServ utente = new UserServ();

    @PostMapping("/authentication")
    public Boolean authentication(@RequestBody String user, @RequestBody String pass) throws Exception {
        return utente.authentication(user, pass);
    } 

    @PostMapping("/")
    public void newUser(@RequestBody User user) throws Exception {
        utente.newUser(user);
    }

    @PostMapping("/delete")
    public void deleteUser(@RequestBody User user) throws Exception{
        utente.deleteUser(user);
    }

}
