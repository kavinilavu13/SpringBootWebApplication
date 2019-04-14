jQuery(document).ready(function() {
		$.ajax({
		url : 'rest/meccaproject/getownername',
		type : 'POST',
		data : jQuery.param({
		}),
		dataType : "text",
		success : function(response) {
			//alert(response);
			 var res = JSON.parse(response);			
						
						 if(res == ''||res == 'undefined' || res== null  )
				 {	
							 
				 }
			 else
				 {
					$.each(res, function(index, value) {				
					  /* alert(index + ': ' + value); */						
					$("#building_owner").append('<option value="'+res[index].name+'"  name='+ res[index].id+'>'+ res[index].name+'</option>');		
					});
					
				 }
		},
		error : function() {
		}
	});
})


jQuery(document).ready(function() {
		$.ajax({
		url : 'rest/meccaproject/getmanagername',
		type : 'POST',
		data : jQuery.param({
		}),
		dataType : "text",
		success : function(response) {
			//alert(response);
			
			 var res = JSON.parse(response);
						 if(res == ''||res == 'undefined' || res== null  )
				 {	
							//alert("null"); 
				 }
			 else
				 {
					$.each(res, function(index, value) {				
					  /* alert(index + ': ' + value); */						
					$("#building_manager").append('<option value='+ res[index].name+'  name='+ res[index].id+'>'+ res[index].name+'</option>');		
					});
					
				 }
		},
		error : function() {
		}
	});
})


jQuery(document).ready(function() {
	
	$.ajax({
		url : 'rest/meccaproject/getAmenities',
		type : 'POST',
		data : jQuery.param({

		
		}),
		dataType : "text",
		success : function(response) {
		//	alert(response);
			if(response=="[]" || response==null||response=="" ||response==undefined  )
				{
				
				$(".Amenities").hide();
				swal({
					  title: "There are no amenities available.Please add",
					 	  type: "info",
					  showCancelButton: false,
					  closeOnConfirm: false,
					  showLoaderOnConfirm: true
					}, function () {
						window.location = "AddAmenities.html"
					});
				}
			else
				{
			 var res = JSON.parse(response);	
		 //console.log(res);
				for(i=0;i<res.length;i++)
					
					{
					console.log(res.length);
					  $("#amenities").append('<div class="col-md-4"><div class="form-group"><label for="companyName"><h6><u>'+res[i].servicetype_name+'</u></h6></label><div class="col-md-12 col-sm-12   skin-square skin amenities-'+res[i].servicetype_id+'"></div></div></div>');
					  $("#groundflooramenities").append('<div class="col-md-4"><div class="form-group"><label for="companyName"><h6><u>'+res[i].servicetype_name+'</u></h6></label><div class="col-md-12 col-sm-12 skin skin-square amenities-groundfloor-'+res[i].servicetype_id+'"></div></div></div>');
					  $("#flooramenities").append('<div class="col-md-4"><div class="form-group"><label for="companyName"><h6><u>'+res[i].servicetype_name+'</u></h6></label><div class="col-md-12 col-sm-12  skin skin-square amenities-floor-'+res[i].servicetype_id+'"></div></div></div>');
					  $("#roomamenities").append('<div class="col-md-4"><div class="form-group"><label for="companyName"><h6><u>'+res[i].servicetype_name+'</u></h6></label><div class="col-md-12 col-sm-12 skin skin-square amenities-floor_room-'+res[i].servicetype_id+'"></div></div></div>');
					  $("#terrace_amenities").append('<div class="col-md-4"><div class="form-group"><label for="companyName"><h6><u>'+res[i].servicetype_name+'</u></h6></label><div class="col-md-12 col-sm-12  skin skin-square amenities-terrace-'+res[i].servicetype_id+'"></div></div></div>');
					  $("#terrace_room_amenities").append('<div class="col-md-4"><div class="form-group"><label for="companyName"><h6><u>'+res[i].servicetype_name+'</u></h6></label><div class="col-md-12 col-sm-12  skin skin-square amenities-terrace_room-'+res[i].servicetype_id+'"></div></div></div>');
					  var service_name = res[i].service_name;
					   service_name = service_name.split(',');	
					   
					   var servicetype_id = res[i].servicetype_id;
					   servicetype_id = servicetype_id.split(',');	
					   
					
					   var service_id = res[i].service_id;
					   service_id = service_id.split(',');	
					   for(j=0;j<service_name.length;j++)
						{
						$(".amenities-"+res[i].servicetype_id).append('<fieldset><input type="checkbox" id=building-amenities-'+res[i].servicetype_id+'-'+service_id[j]+' name="building_amenities" value='+res[i].servicetype_id+'-'+service_id[j]+' ><label >&nbsp; '+service_name[j]+'</label></fieldset>');					
						$(".amenities-groundfloor-"+res[i].servicetype_id).append('<fieldset><input type="checkbox"  id=ground-amenities-'+res[i].servicetype_id+'-'+service_id[j]+' name="amenities-groundfloor"  class="skin skin-square" value='+res[i].servicetype_id+'-'+service_id[j]+' ><label for="input-11">&nbsp; '+service_name[j]+'</label></fieldset>');
						$(".amenities-floor-"+res[i].servicetype_id).append('<fieldset><input type="checkbox" id=floor-amenities-'+res[i].servicetype_id+'-'+service_id[j]+' name="amenities-floor" class="skin skin-square" value='+res[i].servicetype_id+'-'+service_id[j]+' ><label for="input-11">&nbsp; '+service_name[j]+'</label></fieldset>');
						$(".amenities-floor_room-"+res[i].servicetype_id).append('<fieldset><input type="checkbox"  id=room-amenities-'+res[i].servicetype_id+'-'+service_id[j]+' name="amenities-floor_room" class="skin skin-square" value='+res[i].servicetype_id+'-'+service_id[j]+' ><label for="input-11">&nbsp; '+service_name[j]+'</label></fieldset>');
						$(".amenities-terrace-"+res[i].servicetype_id).append('<fieldset><input type="checkbox" id=terrace-amenities-'+res[i].servicetype_id+'-'+service_id[j]+' name="amenities-terrace" class="skin skin-square" value='+res[i].servicetype_id+'-'+service_id[j]+' ><label for="input-11">&nbsp; '+service_name[j]+'</label></fieldset>');
						$(".amenities-terrace_room-"+res[i].servicetype_id).append('<fieldset><input type="checkbox" id=terrace-room-amenities-'+res[i].servicetype_id+'-'+service_id[j]+' name="amenities-terrace-room" class="skin skin-square" value='+res[i].servicetype_id+'-'+service_id[j]+' ><label for="input-11">&nbsp; '+service_name[j]+'</label></fieldset>');
				
						}
					   checkboxs();
						
					}        

				}
		},
		error : function() {
		}
	});
})

function  checkboxs (){
	$('.icheck_minimal input').iCheck({
        checkboxClass: 'icheckbox_minimal',
        radioClass: 'iradio_minimal',
    });
   $('.icheckbox_square-blue input').iCheck({
        checkboxClass: 'icheckbox_square-blue',
        radioClass: 'iradio_square-blue'
    });
   $('.skin-square input').iCheck({
       checkboxClass: 'icheckbox_square-blue',
       radioClass: 'iradio_square-blue',
   });
}


$('#Terrace_Type').on('change', function() {

	 var Terrace_Type =$.trim($("#Terrace_Type").val());	
	 if(Terrace_Type=="Terrace with room")
		 {
		 $(".terrace_hide").show();
	
		 }
	 else
		 {
		 $(".terrace_hide").hide();
		
		 }
	});



jQuery(document).ready(function() {

	var response = window.location.search;
	var url = response.replace("?",'');	
	var str=url.toString();
	var id=str.split("=");
	var id=id[1];
	//alert(id);
	$(".loader").show();
	$.ajax({
		url : 'rest/meccaproject/getbuildingdetails',
		type : 'POST',
		data : jQuery.param({
			id : id
		}),
		dataType : "text",
		success : function(response) {
		//	alert(response);
		
			 var res = JSON.parse(response);
			 
			 if(response=="[]" || response==null||response=="" ||response==undefined  )
				{
					 
				 }
			 else
				 {
			var building_id = res[0].B_id;
			var building_name = res[0].building_name;
			var doe = res[0].doe;
			var email_id = res[0].email_id;
			var mobile_number = res[0].mobile_number;
			var no_of_floor = res[0].no_of_floor;
			var description = res[0].description;	
			var owner_id = res[0].db_owner_id;
			var building_manager = res[0].building_manager;
			var street_address = res[0].street_address;
			var area = res[0].area;
			var city = res[0].city;
			var zip_code = res[0].zip_code;
			var country = res[0].country;
			var district = res[0].district;
			var state = res[0].state;
			var certificate = res[0].certificate;
			var agreement = res[0].agreement;
			var chk_building_images = res[0].chk_building_images;
			var building_language=res[0].building_language;		
			var metro_name=res[0].metro_name;			
			var bus_number=res[0].bus_number;		
			var no_of_floors = res[0].no_of_floors;
			var no_of_rooms = res[0].no_of_rooms;
			var building_price = res[0].building_price;			
			var building_description = res[0].building_description;
			var building_services = res[0].building_services;
			var building_images = res[0].building_images;			
			var ground_building_id = res[0].ground_building_id;
			var ground_floor_id = res[0].ground_floor_id;
			var ground_building_type = res[0].ground_building_type;
			var ground_service = res[0].ground_service;			
			var ground_description = res[0].ground_description;
			var ground_image = res[0].ground_image;
     		var floor_building_id = res[0].floor_building_id;
			var floor_floor_id = res[0].floor_floor_id;
			var floor_no_of_rooms = res[0].floor_no_of_rooms;
			var floor_start_floor = res[0].floor_start_floor;			
			var floor_end_floor = res[0].floor_end_floor;
			var floor_service = res[0].floor_service;			
			var floor_description = res[0].floor_description;
			var floor_image = res[0].floor_image;
			var room_building_id = res[0].room_building_id;
			var room_floor_id = res[0].room_floor_id;
			var room_no_of_rooms = res[0].room_no_of_rooms;
			var room_room_type = res[0].room_room_type;			
			var room_room_size = res[0].room_room_size;
			var room_bed_size = res[0].room_bed_size;			
			var room_price = res[0].room_price;
			var room_no_of_bathroom = res[0].room_no_of_bathroom;
			var room_description = res[0].room_description;			
			var room_service = res[0].room_service;
			var room_image = res[0].room_image;
			var terrace_building_id = res[0].terrace_building_id;
			var terrace_floor_id = res[0].terrace_floor_id;
			var terrace_no_of_rooms = res[0].terrace_no_of_rooms;
			var terrace_start_floor = res[0].terrace_start_floor;			
			var terrace_end_floor = res[0].terrace_end_floor;
			var terrace_service = res[0].terrace_service;			
			var terrace_description = res[0].terrace_description;
			var terrace_image = res[0].terrace_image;
			var terrace_room_building_id = res[0].terrace_room_building_id;
			var terrace_room_floor_id = res[0].terrace_room_floor_id;
			var terrace_room_no_of_rooms = res[0].terrace_room_no_of_rooms;
			var terrace_room_room_type = res[0].terrace_room_room_type;			
			var terrace_room_room_size = res[0].terrace_room_room_size;
			var terrace_room_bed_size = res[0].terrace_room_bed_size;			
			var terrace_room_price = res[0].terrace_room_price;
			var terrace_room_no_of_bathroom = res[0].terrace_room_no_of_bathroom;		
			var terrace_room_description = res[0].terrace_room_description;			
			var terrace_room_service = res[0].terrace_room_service;
			var terrace_room_image = res[0].terrace_room_image;
			var chk_building_images = res[0].chk_building_images;			
			var chk_ground_images = res[0].chk_ground_images;
			var chk_floor_image = res[0].chk_floor_image;		
			var chk_room_image = res[0].chk_room_image;			
			var chk_terrace_image = res[0].chk_terrace_image;
			var chk_terrace_room_image = res[0].chk_terrace_room_image;
			var progress = res[0].progress;
	
			if(progress=="Active")
				{
				
				  $('input:radio[id="Active"]').attr('checked',true);
				}
			else
				{	
				  $('input:radio[id="Inactive"]').attr('checked',true);
				}
		      //  alert(building_name+doe+email_id+mobile_number+no_of_floor+description+street_address+city+zip_code+country+certificate+agreement+building_images);
	      // alert(description);
			
		    $('#building_id').val(building_id);
            $('#building_name').val(building_name);
			$('#doe').val(doe);
			$('#support_email_id').val(email_id);
			$('#mobile_number').val(mobile_number);
		
			$('#building_owner').val(owner_id).change();
			
			$('#building_manager').val(building_manager).change();
			$('#street_address').val(street_address);
			$('#area').val(area);		
			$('#city').val(city);
			$('#District').val(district);			
			$('#State').val(state).change();
			
			$('#Country').val(country).change();
			$('#Zip_code').val(zip_code);								
			$('#metro_name').val(metro_name);
			$('#bus_number').val(bus_number);								
            var building_language_array = building_language.split(',');
		    $("#default-multiple").val(building_language_array).change();			
			$('#number_of_floor').val(no_of_floors);
			$('#number_of_rooms').val(no_of_rooms);
			$('#building_price').val(building_price);			
			$('#building_description').val(building_description);		
			$('#building_services').val(building_services);
			$('#building_images').val(building_images);	
			$('#ground_building_id').val(ground_building_id);
			$('#ground_floor_id').val(ground_floor_id);			
			$('#ground_building_type').val(ground_building_type);			
			$('#ground_service').val(ground_service);
			$('#ground_floor_description').val(ground_description);
			$('#ground_image').val(ground_image);					
			$('#floor_building_id').val(floor_building_id);
			$('#floor_floor_id').val(floor_floor_id);				
			$('#num_of_rooms').val(floor_no_of_rooms);
			$('#Start_floor_number').val(floor_start_floor);			
			$('#end_floor_number').val(floor_end_floor);			
			$('#Floor_description').val(floor_description);				
			$('#floor_service').val(floor_service);
			$('#floor_image').val(floor_image);
			$('#room_building_id').val(room_building_id);
			$('#room_floor_id').val(room_floor_id);		
			$('#room_type').val(room_room_type).change();			
			$('#room_size').val(room_room_size);
			$('#beds_size').val(room_bed_size).change();
			$('#Price').val(room_price);							
			$('#num_of__bathroom').val(room_no_of_bathroom).change();;		
			$('#room_description').val(room_description);			
			$('#room_service').val(room_service);							
			$('#room_image').val(room_image);					
			$('#terrace_building_id').val(terrace_building_id);
			$('#terrace_floor_id').val(terrace_floor_id);				
            $('#terrace_no_of_room').val(terrace_no_of_rooms);
			$('#terrace_description').val(terrace_description);		
			$('#terrace_service').val(terrace_service);							
			$('#terrace_image').val(terrace_image);		
			$('#terrace_room_building_id').val(terrace_room_building_id);
			$('#terrace_room_floor_id').val(terrace_room_floor_id);		
			$('#terrace_room_type').val(terrace_room_room_type).change();			
			$('#terrace_room_size').val(terrace_room_room_size);
			$('#terrace_beds_size').val(terrace_room_bed_size).change();
			$('#terrace_Price').val(terrace_room_price);							
			$('#terrace_bathroom').val(terrace_room_no_of_bathroom).change();					
			$('#terrace_room_description').val(terrace_room_description);
			$('#terrace_room_service').val(terrace_room_service);
			$('#terrace_room_image').val(terrace_room_image);							
			if(certificate==undefined || certificate==null || certificate=="")
			{			
			}
		else
			{
			//alert(certificate);
			certificate = certificate.split(".");
			certificate="Certificate."+certificate[1];			
		 $('#Certificate_extension').html(certificate);		
			}
		//alert(aadhar_card);
		if(agreement==undefined || agreement==null || agreement=="")
		{		
		}
		else
			{
			agreement = agreement.split(".");
			agreement="Agreement."+agreement[1];
		    $('#Agreement_extension').html(agreement);		
	}
	
			
			//$('#building_images').val(building_images);
			 if(building_images == ''||building_images == 'undefined' || building_images== null  )
				 {			
			$(".building-image-hide").hide();
			$(".upload-building-image").show();
			
				 }
			 else
				 {
				 $(".building-image-hide").show();
				 $(".upload-building-image").hide();
				 var i=0;
				  var chk_building_images_split = chk_building_images.split(',');
				 var building_images = building_images.split(',');
					$.each(building_images, function(index, value) {	
						
					console.log(index + ': ' + value);
							$("#building-image").append('<figure class="col-lg-3 col-md-6 col-sm-6 col-xs-12"><a href='+value+' class="my-gallery"	itemprop="contentUrl" data-size="480x360"><input type="checkbox" name="buildingcheckbox" id='+chk_building_images_split[i]+' value='+chk_building_images_split[i]+'> <img class="img-thumbnail img-fluid" src='+value+' itemprop="thumbnail" alt="Image description" /></a></figure>');
						i++;	
					});
				 }
			 
			 if(ground_image == ''||ground_image == 'undefined' || ground_image== null  )
			 {			
					$(".ground-image-hide").hide();
					$(".upload-ground-image").show();	
			 }
		 else
			 {
			 $(".ground-image-hide").show();
			 $(".upload-ground-image").hide();	
			 var i=0;
			  var chk_ground_images_split = chk_ground_images.split(',');
			 var ground_image = ground_image.split(',');
				$.each(ground_image, function(index, value) {				
				console.log(index + ': ' + value);
						$("#ground-image").append('<figure class="col-lg-3 col-md-6 col-sm-6 col-xs-12"><a href='+value+' class="my-gallery"	itemprop="contentUrl" data-size="480x360"><input type="checkbox" name="groundcheckbox" id='+chk_ground_images_split[i]+' value='+chk_ground_images_split[i]+'> <img class="img-thumbnail img-fluid" src='+value+' itemprop="thumbnail" alt="Image description" /></a></figure>');
						i++;
				});
			 }
			 
			 if(floor_image == ''||floor_image == 'undefined' || floor_image== null  )
			 {			
				 $(".floor-image-hide").hide();
					$(".upload-floor-image").show();	
			
		
			 }
		 else
			 {
			 $(".floor-image-hide").show();
			 $(".upload-floor-image").hide();		
			 
			 var chk_floor_images_split = chk_floor_image.split(',');
			 var i=0;
			 var floor_image = floor_image.split(',');
				$.each(floor_image, function(index, value) {				
				console.log(index + ': ' + value);
						$("#floor-image").append('<figure class="col-lg-3 col-md-6 col-sm-6 col-xs-12"><a href='+value+' class="my-gallery"	itemprop="contentUrl" data-size="480x360"><input type="checkbox" name="floorcheckbox" id='+chk_floor_images_split[i]+' value='+chk_floor_images_split[i]+'> <img class="img-thumbnail img-fluid" src='+value+' itemprop="thumbnail" alt="Image description" /></a></figure>');
						i++;
				});
			 }
			 
			 if(room_image == ''||room_image == 'undefined' || room_image== null  )
			 {			
		
					$(".room-image-hide").hide();
					$(".upload-room-image").show();	
	
			 }
		 else
			 {
			 $(".room-image-hide").show();
			 $(".upload-room-image").hide();		
			 var i=0;
			 
			 var chk_room_images_split = chk_room_image.split(',');
			 var room_image = room_image.split(',');
				$.each(room_image, function(index, value) {				
				console.log(index + ': ' + value);
						$("#room-image").append('<figure class="col-lg-3 col-md-6 col-sm-6 col-xs-12"><a href='+value+' class="my-gallery"	itemprop="contentUrl" data-size="480x360"><input type="checkbox" name="roomcheckbox" id='+chk_room_images_split[i]+' value='+chk_room_images_split[i]+'> <img class="img-thumbnail img-fluid" src='+value+' itemprop="thumbnail" alt="Image description" /></a></figure>');
						i++;
				});
			 }
			 if(terrace_image == ''||terrace_image == 'undefined' || terrace_image== null  )
			 {			
				 $(".terrace-image-hide").hide();
					$(".upload-terrace-image").show();	
	
			 }
		 else
			 {
			 $(".terrace-image-hide").show();
			 $(".upload-terrace-image").hide();		
			 var chk_terrace_images_split = chk_terrace_image.split(',');
			 var i=0;
			 var terrace_image = terrace_image.split(',');
				$.each(terrace_image, function(index, value) {				
				console.log(index + ': ' + value);
						$("#terrace-image").append('<figure class="col-lg-3 col-md-6 col-sm-6 col-xs-12"><a href='+value+' class="my-gallery"	itemprop="contentUrl" data-size="480x360"><input type="checkbox" name="terracecheckbox" id='+chk_terrace_images_split[i]+' value='+chk_terrace_images_split[i]+'> <img class="img-thumbnail img-fluid" src='+value+' itemprop="thumbnail" alt="Image description" /></a></figure>');
						i++;
						});
			 }
			 
			 if(terrace_room_image == ''||terrace_room_image == 'undefined' || terrace_room_image== null  )
			 {	
				 $(".terrace-room-image-hide").hide();
					$(".upload-terrace-room-image").show();	
	

			 }
		 else
			 {
			 $(".terrace-room-image-hide").show();
			 $(".upload-terrace-room-image").hide();		
			 var chk_terrace_room_images_split = chk_terrace_room_image.split(',');
			 var i=0;
		
			 var terrace_room_image = terrace_room_image.split(',');
				$.each(terrace_room_image, function(index, value) {				
				console.log("terrace imae" +index + ': ' + value);
						$("#terrace-room-image").append('<figure class="col-lg-3 col-md-6 col-sm-6 col-xs-12"><a href='+value+' class="my-gallery"	itemprop="contentUrl" data-size="480x360"><input type="checkbox" name="terraceroomcheckbox" id='+chk_terrace_room_images_split[i]+' value='+chk_terrace_room_images_split[i]+'> <img class="img-thumbnail img-fluid" src='+value+' itemprop="thumbnail" alt="Image description" /></a></figure>');
						i++;
				});
			 }
			 
			 var building_services = building_services.split(',');
				$.each(building_services, function(index, value) {
					id="building-amenities-"+building_services[index];
					  var id = id.replace(/ /g,'');
					  console.log(id);
					  $('input:checkbox[id='+id+']').attr('checked',true);
					  checkboxs();
				});
				
				 var ground_service = ground_service.split(',');
					$.each(ground_service, function(index, value) {
						id="ground-amenities-"+ground_service[index];
						  var id = id.replace(/ /g,'');
						  console.log(id);
						  $('input:checkbox[id='+id+']').attr('checked',true);
						  checkboxs();
					});		
					 var floor_service = floor_service.split(',');
						$.each(floor_service, function(index, value) {
							id="floor-amenities-"+floor_service[index];
							  var id = id.replace(/ /g,'');
							  console.log(id);
							  $('input:checkbox[id='+id+']').attr('checked',true);
							  checkboxs();
						});		
						 var room_service = room_service.split(',');
							$.each(room_service, function(index, value) {
								id="room-amenities-"+room_service[index];
								  var id = id.replace(/ /g,'');
								  console.log(id);
								  $('input:checkbox[id='+id+']').attr('checked',true);
								  checkboxs();
							});		
							 var terrace_service = terrace_service.split(',');
								$.each(terrace_service, function(index, value) {
									id="terrace-amenities-"+terrace_service[index];
									  var id = id.replace(/ /g,'');
									  console.log(id);
									  $('input:checkbox[id='+id+']').attr('checked',true);
									  checkboxs();
								});		
								
								 var terrace_room_service = terrace_room_service.split(',');
									$.each(terrace_room_service, function(index, value) {
										id="terrace-room-amenities-"+terrace_room_service[index];
										  var id = id.replace(/ /g,'');
										  console.log(id);
										  $('input:checkbox[id='+id+']').attr('checked',true);
										  checkboxs();
									});		
									
		}
			 $(".loader").hide();
		},
		error : function() {
		}
	});
})


$(document).ready(function() { 
    $("#button-building-image").click(function() { 
    	$(".upload-building-image").show();
    	$("#button-building-image").hide();
    }); 
    $("#button-ground-image").click(function() { 
    	$(".upload-ground-image").show();
    	$("#button-ground-image").hide();
    }); 
    $("#button-floor-image").click(function() { 
    	$(".upload-floor-image").show();
    	$("#button-floor-image").hide();
    }); 
    $("#button-room-image").click(function() { 
    	$(".upload-room-image").show();
    	$("#button-room-image").hide();
    }); 
    $("#button-terrace-image").click(function() { 
    	$(".upload-terrace-image").show();
    	$("#button-terrace-image").hide();
    }); 
    $("#button-terrace-room-image").click(function() { 
    	$(".upload-terrace-room-image").show();
    	$("#button-terrace-room-image").hide();
    }); 
    
}); 

