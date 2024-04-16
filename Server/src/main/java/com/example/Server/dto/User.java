package com.example.Server.dto;

public class User {
    private String name;
    private String email;
    private String password;

    public String getNome() {
        return name;
    }

    public void setNome(String nome) {
        this.name = nome;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

   
    public User(String nome, String email, String password){
        this.name = nome;
        this.email = email;
        this.password = password;
    }
}
