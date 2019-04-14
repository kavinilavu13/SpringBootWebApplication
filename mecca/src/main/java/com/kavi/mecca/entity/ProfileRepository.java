package com.kavi.mecca.entity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
@Repository
public interface ProfileRepository extends JpaRepository<Profile, Long>{
	
	@Query("SELECT u FROM Profile u WHERE u.phone_number = :phoneNumber and u.password=:password")
	public Profile findProfileByPhoneNumber( @Param("phoneNumber") String phoneNumber, @Param("password") String password);

}
