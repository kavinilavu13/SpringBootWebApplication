package com.kavi.mecca.controller;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.kavi.mecca.entity.Profile;
import com.kavi.mecca.entity.ProfileRepository;
import com.kavi.mecca.request.ProfileRequest;

@RestController
public class MeccaProfileController {
	@Autowired
	ProfileRepository profileRepository;

/*	@PostMapping("/profile")
	public String createProfile(@RequestBody Profile profile) {
		String name = profile.getName();

		String photo = "IMG-20180604-WA0009.jpg";
		profile.setPhoto(photo);
		String getphoto = profile.getPhoto();
		System.err.println(getphoto);
		Profile savedprofile = profileRepository.save(profile);

		return "AddUser";
	}*/

	// 3.1.3 maps html form to a Model
	@RequestMapping(value = "/AddUser", method = RequestMethod.POST)
	public ResponseEntity<?> multiUploadFileModel(@ModelAttribute ProfileRequest model) {

		try {

			saveUploadedFiles(Arrays.asList(model.getFiles()));

		} catch (IOException e) {
			return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
		}

		return new ResponseEntity("Successfully uploaded!", HttpStatus.OK);

	}

	private void saveUploadedFiles(List<MultipartFile> files) throws IOException {

		for (MultipartFile file : files) {

			if (file.isEmpty()) {
				continue; // next pls
			}

			byte[] bytes = file.getBytes();
			Path path = Paths.get(file.getOriginalFilename());
			Files.write(path, bytes);

		}
	}

	@GetMapping("/profile")
	List<Profile> retrieveProfile() {
		List<Profile> profile = profileRepository.findAll();
		System.out.println(profile);
		return profile;
	}

	@GetMapping("/profile/{id}")
	Profile findById(@PathVariable("id") Long id) {
		// TODO Auto-generated method stub
		System.out.println(id);
		Optional<Profile> profile = profileRepository.findById(id);
		return profile.get();
	}

	@PutMapping("/profile")
	Profile updateProfile(@RequestBody Profile profile) {
		// TODO Auto-generated method stub
		Profile update_profile = profileRepository.save(profile);
		return update_profile;
	}

	@DeleteMapping("/profile/{id}")
	String deleteProfile(@PathVariable("id") Long id) {
		// TODO Auto-generated method stub
		profileRepository.deleteById(id);
		return "deleted successfully";
	}

	// Get the form field vaues which are populated using the backing bean and
	// store it in db
/*	@RequestMapping(value = "/AddUser", method = RequestMethod.POST)
	public String processRequest(@ModelAttribute("adduser") Profile profile) {
		String response = "";
		System.err.println(profile.getName());
		Profile savedprofile = profileRepository.save(profile);

		System.err.println(savedprofile);
		if (savedprofile != null) {
			response = "adduser-0";
		} else {
			response = "adduser-1";
		}
		return "AddUser.html";
	}*/
}
