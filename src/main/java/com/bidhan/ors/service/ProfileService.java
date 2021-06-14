package com.bidhan.ors.service;

import com.bidhan.ors.dto.Dto;
import com.bidhan.ors.dto.UserDetailsDto;
import org.springframework.stereotype.Service;

@Service
public interface ProfileService {
    UserDetailsDto getDetails(String userID);
    Dto updateUserProfile(UserDetailsDto userDetailsDto);
}
