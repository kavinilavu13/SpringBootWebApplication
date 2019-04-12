package com.kavi.mecca.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.kavi.mecca.entity.Profile;
import com.kavi.mecca.entity.ProfileRepository;
@RestController
public class MeccaController {
	@Autowired
	ProfileRepository profileRepository;
	@PostMapping("/profile")
	public Profile createStudent(@RequestBody Profile profile) {
		String name = profile.getName();
		System.err.println(name);
		Profile savedprofile = profileRepository.save(profile);
		return savedprofile;
	}	
	@RequestMapping("/profileinfo")
	List<Profile> testMethod() {
		List<Profile> profile = profileRepository.findAll();
		System.out.println(profile);
		return profile;

	}
}
