package com.kavi.mecca.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.kavi.mecca.entity.AmenitiesType;
import com.kavi.mecca.entity.AmenitiesTypeRepository;
import com.kavi.mecca.entity.SubAmenities;
import com.kavi.mecca.entity.SubAmenitiesRepository;
import com.kavi.mecca.request.AmenitiesRequest;

@RestController
public class MeccaAmenitiesController {
	@Autowired
	AmenitiesTypeRepository amenitiesTypeRepository;
	@Autowired
	SubAmenitiesRepository subAmenitiesRepository;

	@PostMapping("/amenities")
	public String amenitiesType(@RequestBody AmenitiesRequest amenitiesRequest) {

		AmenitiesType amenitiesType = new AmenitiesType();
		amenitiesType.setService_type_name(amenitiesRequest.getService_name());
		amenitiesType = amenitiesTypeRepository.save(amenitiesType);

		int amenitiesId = amenitiesType.getService_type_id();
		List<String> subTypeList = amenitiesRequest.getService_type_name();

		for (String subAmeniteName : subTypeList) {
			SubAmenities subAmenities = new SubAmenities();
			subAmenities.setService_type_id(amenitiesId);
			subAmenities.setService_name(subAmeniteName);

			subAmenitiesRepository.save(subAmenities);
		}

		return "Date added Sucessfully";
	}
}
