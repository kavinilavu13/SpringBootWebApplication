package com.kavi.mecca.entity;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
@Repository
public interface AmenitiesTypeRepository extends JpaRepository<AmenitiesType, Long>{ 
	
}
