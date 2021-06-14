package com.bidhan.ors.service;

import com.bidhan.ors.dto.Dto;
import com.bidhan.ors.dto.UserDetailsDto;
import com.bidhan.ors.entity.UserDetails;
import com.bidhan.ors.repo.UserDetailsRepo;
import com.bidhan.ors.repo.UserRepo;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;

public class ProfileServiceImpl implements ProfileService{
    @Autowired
    UserDetailsRepo userDetailsRepo;

    @Autowired
    UserRepo userRepo;

    @Autowired
    ModelMapper mapper;

    @Override
    public UserDetailsDto getDetails(String userId) {

        UserDetailsDto detailsDto=new UserDetailsDto();

        try{
        UserDetails ud=userDetailsRepo.findByUser(userRepo.findByUserId(userId));

        if(ud==null){
            throw new NotFoundException("No user details found");
        }

        detailsDto=mapper.map(ud,UserDetailsDto.class);

        detailsDto.setApiStatus(true);
        detailsDto.setApiMsg("Fetched");

        }catch (NotFoundException e){
            detailsDto.setApiStatus(false);
            detailsDto.setApiMsg(e.getMessage());
        }catch (Exception e){
            detailsDto.setApiStatus(false);
            detailsDto.setApiMsg(e.getMessage());
        }

        return detailsDto;
    }


    @Override
    public Dto updateUserProfile(UserDetailsDto userDetailsDto) {
        try{
            UserDetails ud=mapper.map(userDetailsDto,UserDetails.class);
            userDetailsRepo.save(ud);
            userDetailsDto.setApiStatus(true);
            userDetailsDto.setApiMsg("Updated");
        }catch (Exception e){
            userDetailsDto.setApiStatus(false);
            userDetailsDto.setApiMsg(e.getMessage());
        }
        return userDetailsDto;
    }
}
