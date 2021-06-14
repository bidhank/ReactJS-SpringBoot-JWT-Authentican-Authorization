package com.bidhan.ors.init;

import com.bidhan.ors.entity.Unit;
import com.bidhan.ors.entity.User;
import com.bidhan.ors.entity.UserDetails;
import com.bidhan.ors.repo.UnitRepo;
import com.bidhan.ors.repo.UserDetailsRepo;
import com.bidhan.ors.repo.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

@Component
public class DbInit implements CommandLineRunner { //Remove this at production
    @Autowired
    private UserRepo userRepo;

    @Autowired
    private UnitRepo unitRepo;

    @Autowired
    private UserDetailsRepo userDetailsRepo;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Override
    public void run(String... args) throws Exception {


        this.userDetailsRepo.save(new UserDetails("NA",'N',"NA","NA",        this.userRepo.save(new User("admin", passwordEncoder.encode("admin"), 1234,0,"ADMIN",true))));
        this.userDetailsRepo.save(new UserDetails("NA",'N',"NA","NA",        this.userRepo.save(new User("bidhan", passwordEncoder.encode("bidhan"), 1234,1,"USER",true))));
        this.userDetailsRepo.save(new UserDetails("NA",'N',"NA","NA",        this.userRepo.save(new User("john", passwordEncoder.encode("john"), 1234,2,"USER",true))));
        this.userDetailsRepo.save(new UserDetails("NA",'N',"NA","NA",        this.userRepo.save(new User("sam", passwordEncoder.encode("sam"), 1234,3,"USER",true))));

        this.unitRepo.save(new Unit(1,"I.T","bidhan","DEPT"));
        this.unitRepo.save(new Unit(2,"FINANCE","john","DEPT"));
        this.unitRepo.save(new Unit(3,"H.R","shyam","DEPT"));

    }
}
