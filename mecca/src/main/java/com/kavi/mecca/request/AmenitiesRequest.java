package com.kavi.mecca.request;

import java.util.List;

public class AmenitiesRequest {

	private String ServiceType_id;
	private String service_name;

	private List<String> service_type_name;
	public String getServiceType_id() {
		return ServiceType_id;
	}
	public void setServiceType_id(String serviceType_id) {
		ServiceType_id = serviceType_id;
	}
	public String getService_name() {
		return service_name;
	}
	public void setService_name(String service_name) {
		this.service_name = service_name;
	}
	public List<String> getService_type_name() {
		return service_type_name;
	}
	public void setService_type_name(List<String> service_type_name) {
		this.service_type_name = service_type_name;
	}
	public String getService_name_id() {
		return service_name_id;
	}
	public void setService_name_id(String service_name_id) {
		this.service_name_id = service_name_id;
	}
	private String service_name_id;
}
