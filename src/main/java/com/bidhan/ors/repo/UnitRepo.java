package com.bidhan.ors.repo;

import com.bidhan.ors.entity.Unit;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UnitRepo extends JpaRepository<Unit,Long> {

}
