package com.bidhan.ors.entity;

import javax.persistence.*;

@Entity
public class UserDetails {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private int id;
    private String address;
    private char gender;
    private String mobileNo;
    private String email;
    @OneToOne
    @JoinColumn(name = "user_id",referencedColumnName = "userId")
    private User user;


    public UserDetails(String address, char gender, String mobileNo, String email, User user) {

        this.address = address;
        this.gender = gender;
        this.mobileNo = mobileNo;
        this.email = email;
        this.user = user;
    }


    public UserDetails() {

    }


    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public char getGender() {
        return gender;
    }

    public void setGender(char gender) {
        this.gender = gender;
    }

    public String getMobileNo() {
        return mobileNo;
    }

    public void setMobileNo(String mobileNo) {
        this.mobileNo = mobileNo;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }



    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
