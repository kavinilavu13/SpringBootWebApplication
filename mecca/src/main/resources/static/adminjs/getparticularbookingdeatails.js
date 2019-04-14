jQuery(document).ready(function() {
	var response = window.location.search;
	var url = response.replace("?",'');	
	var str=url.toString();
	var id=str.split("=");
	var id=id[1];

	$.ajax({
		url : 'rest/meccaproject/getparticularbookingdetails',
		type : 'POST',
		data : jQuery.param({
			id : id
		}),
		dataType : "text",
		success : function(response) {
	      
			 var res = JSON.parse(response);	
			 var cusname = res[0].cusname;			
			var date_of_birth = res[0].date_of_birth;
			var phone_number = res[0].phone_number;
			var emailid = res[0].emailid;
			var street = res[0].street;
			var area = res[0].area;
			var city = res[0].city;	
			var district = res[0].district;
			var country = res[0].country;
			var state = res[0].state;
			var zip_code = res[0].zip_code;
			var nationality = res[0].nationality;
			var gender = res[0].gender;
			var building_name = res[0].building_name;			
			var building_prize = res[0].building_prize;	
			var check_in_date = res[0].check_in_date;
			var check_out_date = res[0].check_out_date;
			var adults = res[0].adults;
			var children = res[0].children;
			var zip_code = res[0].zip_code;
			var owner_name = res[0].owner_name;
			var building_manager_name = res[0].building_manager_name;		
				
			 $('#cusname').val(cusname);
            $('#doe').val(date_of_birth);
			$('#gender').val(gender).change();
			$('#mobile_number').val(phone_number);
			$('#email_id').val(emailid);
			$('#street_address').val(street);
			$('#area').val(area);
			$('#city').val(city);		
			$('#District').val(district);
			$('#Country').val(country).change();;
			$('#State').val(state).change();
			
			$('#Nationality').val(nationality).change();
			$('#Zip_code').val(zip_code);			
			 $('#building_name').val(building_name);
			 $('#check_in').val(check_in_date);
			 $('#Check_out').val(check_out_date);
			 $('#Adults').val(adults);			 			
			 $('#Prize').val(building_prize);
			 $('#Children').val(children);
			 $('#owner').val(owner_name);
			 $('#Manager').val(building_manager_name);			 
			
		},
		error : function() {
		}
	});
})
