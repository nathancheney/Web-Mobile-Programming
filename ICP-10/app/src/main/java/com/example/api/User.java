package com.example.api;

import com.google.gson.annotations.SerializedName;
public class User {

    private int id;


    @SerializedName("login")
    private String userName;

    public int getId() {
        return id;
    }

    public String getUserName() {
        return userName;
    }

}
