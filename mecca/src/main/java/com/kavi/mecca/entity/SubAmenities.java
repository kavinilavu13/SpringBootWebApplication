package com.kavi.mecca.entity;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "service")
public class SubAmenities {
	@Id
	@GeneratedValue
	private int service_id;
	private int service_type_id;
	private String service_name;

	//@ManyToOne
//	List<AmenitiesType> amenitiesType;

	public int getService_id() {
		return service_id;
	}

	public void setService_id(int service_id) {
		this.service_id = service_id;
	}

	/*public List<AmenitiesType> getAmenitiesType() {
		return amenitiesType;
	}

	public void setAmenitiesType(List<AmenitiesType> amenitiesType) {
		this.amenitiesType = amenitiesType;
	}*/

	public int getService_type_id() {
		return service_type_id;
	}

	public void setService_type_id(int service_type_id) {
		this.service_type_id = service_type_id;
	}

	public String getService_name() {
		return service_name;
	}

	public void setService_name(String service_name) {
		this.service_name = service_name;
	}

}
