package com.example.Server.requester;

import org.springframework.web.bind.annotation.*;

import com.example.Server.dao.UserDAO;
import com.example.Server.dto.User;

@RestController
@RequestMapping("/user")
public class UserReq {
    UserDAO utente = new UserDAO();

    @PutMapping("/{user}/{pass}")
    public Boolean authentication(@PathVariable("user") String user, @PathVariable("pass") String pass) throws Exception {
        return utente.Authentication(user, pass);
    }

    @PostMapping("/")
    public void newUser(@RequestBody User user) throws Exception {
        utente.NewUser(user);
    }

    @PostMapping("/")
    public void deleteUser(@RequestBody User user) throws Exception{
        utente.DeleteUser(user);
    }

}
