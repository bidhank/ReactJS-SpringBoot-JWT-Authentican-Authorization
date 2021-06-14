package com.bidhan.ors.service;


import com.bidhan.ors.dto.UserDto;
import com.bidhan.ors.entity.Unit;
import org.springframework.stereotype.Service;
import java.util.List;


@Service
public interface AdminService {
     List<Unit> getAllUnit();

     List<UserDto> getUsers();

     public UserDto addUser(UserDto userDto);
}
