package com.bidhan.ors.controller;

import com.bidhan.ors.entity.User;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/user")
public class UserController {


    @GetMapping("")
    public User user(){
        return new User();
    }

}
