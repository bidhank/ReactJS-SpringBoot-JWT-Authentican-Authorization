package com.bidhan.ors.controller;

import com.bidhan.ors.dto.UserDto;
import com.bidhan.ors.entity.Unit;
import com.bidhan.ors.service.AdminService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


import java.util.List;


@RestController
@RequestMapping("api/admin")
public class AdminController {

    private AdminService adminService;

    public AdminController(AdminService adminService){
       this.adminService = adminService;
    }

    @GetMapping("/units")
    public List<Unit> getUnits(){
        return adminService.getAllUnit();
    }

    @GetMapping("/users")
    public List<UserDto> getUsers(){
        return adminService.getUsers();
    }

    @PostMapping("/addUser")
    public ResponseEntity<String> addUser(@RequestBody UserDto userDto){
        UserDto resDto= adminService.addUser(userDto);

        return (resDto.isApiStatus()) ? ResponseEntity.ok().body(resDto.getApiMsg())
                :ResponseEntity.badRequest().body(resDto.getApiMsg());
    }
}
