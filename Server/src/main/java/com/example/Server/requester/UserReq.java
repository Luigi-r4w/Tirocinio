package com.example.Server.requester;

import org.springframework.web.bind.annotation.*;

import com.example.Server.dto.Response;
import com.example.Server.dto.User;
import com.example.Server.dto.Utente;
import com.example.Server.services.UserServ;

@RestController
@RequestMapping("/user")
public class UserReq {
    UserServ utente = new UserServ();

    @PostMapping("/authentication")
    public Boolean authentication(@RequestBody Utente user) throws Exception {
        return utente.authentication(user.getEmail(), user.getPassword());
    } 

    @PostMapping("/")
    public Response newUser(@RequestBody User user) throws Exception {
        return utente.newUser(user);
    }

    @PostMapping("/delete")
    public void deleteUser(@RequestBody User user) throws Exception{
        utente.deleteUser(user);
    }

}
