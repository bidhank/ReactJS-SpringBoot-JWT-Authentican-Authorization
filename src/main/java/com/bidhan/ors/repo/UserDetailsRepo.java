package com.bidhan.ors.repo;

import com.bidhan.ors.entity.User;
import com.bidhan.ors.entity.UserDetails;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserDetailsRepo extends JpaRepository<UserDetails,Long> {
    UserDetails findByUser(User user);
}
