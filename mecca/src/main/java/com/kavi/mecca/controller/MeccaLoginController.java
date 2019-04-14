package com.kavi.mecca.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.kavi.mecca.entity.Profile;
import com.kavi.mecca.entity.ProfileRepository;
import com.kavi.mecca.request.LoginRequest;

@RestController
public class MeccaLoginController {
	@Autowired
	ProfileRepository profileRepository;
	@PostMapping("/login")
	String loginChecking(@RequestBody LoginRequest login) {
		String response = "";
		String phonenumber = login.getPhone_number();
		String password = login.getPassword();
		Profile profileData = null;
		profileData=	profileRepository.findProfileByPhoneNumber(phonenumber, password);
		System.err.println(profileData);
		if (profileData != null) {
			response = "Login Success";
		} else {
			response = "Login Failure";
		}
		System.err.println(phonenumber + "," + password);
		System.err.println(response);
		return response;
	}
}
