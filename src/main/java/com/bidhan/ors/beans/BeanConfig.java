package com.bidhan.ors.beans;


import com.bidhan.ors.service.AdminService;
import com.bidhan.ors.service.AdminServiceImpl;
import com.bidhan.ors.service.ProfileService;
import com.bidhan.ors.service.ProfileServiceImpl;
import org.modelmapper.ModelMapper;
import org.modelmapper.convention.MatchingStrategies;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class BeanConfig {

    @Bean
    public AdminService adminService(){
        return new AdminServiceImpl();
    }

    @Bean
    public ProfileService profileService(){return new ProfileServiceImpl();
    }

    @Bean
    public ModelMapper modelMapper(){
        ModelMapper modelMapper= new ModelMapper();
        modelMapper.getConfiguration().setMatchingStrategy(MatchingStrategies.LOOSE); //For Mapping Nested Objects Too
        return modelMapper;
    }

}
