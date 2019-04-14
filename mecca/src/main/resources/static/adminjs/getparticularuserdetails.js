jQuery(document).ready(function() {
	var response = window.location.search;
	var url = response.replace("?",'');	
	var str=url.toString();
	var id=str.split("=");
	var id=id[1];
	 id = $. trim(id);
	var arr = {
			id : "13"
		};
	alert(id);
	console.log(id);
	$.ajax({
		url : "profile/"+id,
		type : 'GET',
		//data :JSON.stringify(arr),
		contentType : 'application/json; charset=utf-8',
		dataType : "text",
		success : function(response) {
	alert("request:::"+response);
	console.log(response);
			 var res = JSON.parse(response);	
			 var userid = res[0].id;
			
			var name = res[0].name;
			var phone_number = res[0].phone_number;
			var email_id = res[0].email_id;
			var whats_app_number = res[0].whats_app_number;
			var facebook_id = res[0].facebook_id;
			var instragram_id = res[0].instragram_id;	
			var gender = res[0].gender;
			var date_of_birth = res[0].date_of_birth;
			var state = res[0].state;
			var country = res[0].country;
			var zip_code = res[0].zip_code;
			var country = res[0].country;
			var nationality = res[0].nationality;			
			var role = res[0].role;	
			var district = res[0].district;
			var area = res[0].area;
			var city = res[0].city;
			var street = res[0].street;
			var zip_code = res[0].zip_code;
			var aadhar_card = res[0].aadhar_card;
			var pan_card = res[0].pan_card;
			var photo = res[0].photo;
			//alert(pan_card);	
			 $('#userid').val(userid);
            $('#ownerName').val(name);
			$('#doe').val(date_of_birth);
			$('#Gender').val(gender).change();
			$('#mobile_number').val(phone_number);
			$('#role').val(role).change();
			$('#Street_address').val(street);
			$('#area').val(area);		
			$('#city').val(city);
			$('#District').val(district);
			$('#Country').val(country).change();
			$('#State').val(state).change();
			$('#Nationality').val(nationality).change();
			$('#Zip_code').val(zip_code);			
			 $('#whatsapp_number').val(whats_app_number);
			 $('#email_id').val(email_id);
			 $('#instagram_id').val(instragram_id);
			 $('#facebook_id').val(facebook_id);			 
			
			if(photo==undefined || photo==null || photo=="")
				{
				$("#imageshow").hide();
				$("#boxshow").show();
				
				
				}
			else
				{
				$("#imageshow").show();
				$("#boxshow").show();
				
				$("#imageappend").append(' <img src="'+photo+'" class=" img-border height-100" alt="Card image">');		
				
			
				}
				
				if(aadhar_card==undefined || aadhar_card==null || aadhar_card=="")
				{
				
				}
			else
				{
			aadhar_card = aadhar_card.split(".");
			aadhar_card="Proof_1."+aadhar_card[1];
			 $('#aadharcard_extension').html(aadhar_card);
				}
			//alert(aadhar_card);
			if(pan_card==undefined || pan_card==null || pan_card=="")
			{
			
			}
			else
				{
			pan_card = pan_card.split(".");
			pan_card="Proof_2."+pan_card[1];
			$('#pancard_extension').html(pan_card);
		}
		},
		error : function() {
		}
	});
})
