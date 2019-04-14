$('#addamenities').on('submit', function(e) {
	e.preventDefault();
	  var ServiceType_id =$.trim($("#ServiceType").val());	  
	
	 var new_service_name = [];
	   $.each($("input[name*='[newservicename]']"), function(){ 
	
		   var current_newservice=$(this).val();
		
		
		    if(current_newservice==null||current_newservice=='')
			   {
		    
			   } 	
		   else
			   {
			  		  	  
			   new_service_name.push($(this).val());
			  
			   }
		   
	   });
	   
	   new_service_name= new_service_name.join(",");
	  
	   var old_service_name = [];
	   $.each($("input[name ='service_name']"), function(){
		   var current_service_name=$(this).val();		  
		    if(current_service_name==null||current_service_name=='')
			   {
		    
			   } 	
		   else
			   {
				  	  
			   var service_name=$(this).val();
			   old_service_name.push( $(this).attr('id')+"-"+$(this).val());
		    
			   }

	   });
	   old_service_name=old_service_name.join(",");   	 
	   var service_name_id = [];
	   $.each($("input[name='service_name_id']"), function(){ 	 
		 
		   var current_service_name_id=$(this).val();		  
		    if(current_service_name_id==null||current_service_name_id=='')
			   {
		    
			   } 	
		   else
			   {
			   service_name_id.push($(this).val());
		    
			   }
	   });
	   service_name_id=service_name_id.join(",");		
	   if((new_service_name==''|| new_service_name==null)&&(old_service_name==null||old_service_name==''))
		   {
		
		   toastr.clear();
			toastr.info('<a class="close-toastr"> There are no SubAmenities.So Add New </a> .', 'Note!', {positionClass: 'toast-bottom-right', containerId: 'toast-bottom-right'},{"showDuration":0.5});	
			$(document).click(function() {
				toastr.clear();
			});
		   }
	   else
		   {
		   
		   
		   var amenities = {
				   {
					   "ServiceType_id": "breakfast",
					   "service_name": "",
					   "service_type_name": [
					     "tea",
					     "cofee"
					   ],
					   "service_name_id": ""
					 }
				};
		   alert(amenities);
	$.ajax({
		url : 'amenities',	
		type : 'POST',
		data :JSON.stringify(amenities),
		dataType : "text",
		contentType : 'application/json; charset=utf-8',
		success : function(response) {
			//alert(response);
				var ERROR_MSG1 = "Update successfully";				
				var ERROR_MSG2 = "Registeration Failed";
				var ERROR_MSG3 = "Add Amenities Successfully";
				var ERROR_MSG4 = "Sub Amenities Successfully";
				
				if ((response == ERROR_MSG2)) {
	                swal(
	                    {
	                        title : "Add Amenities Failed",
	                        type : 'error'
	                    },
	                    function() {
	                       window.location = "ViewAmenities.html";
	                      
	                    });

				}

				else if ((response == ERROR_MSG3)) {

	                swal(
	                    {
	                        title : "Add Amenities Successfully",
	                        type : 'success'
	                    },
	                    function() {
	                    	 // window.location = "ViewAmenities.html";
	                    	location.reload();
	                    });
	            }
				else if ((response == ERROR_MSG4)) {

	                swal(
	                    {
	                        title : "Add  Amenities Successfully",
	                        type : 'success'
	                    },
	                    function() {
	                    	  //window.location = "ViewAmenities.html";
	                    	location.reload();
	                    });
	            }

				else {
	                swal(
	                    {
	                        title : "Update successfully",
	                        type : 'success'
	                    },
	                    function() {
	                      //window.location = "ViewAmenities.html";
	                    	location.reload();
	                    });

	            }
			},
		error : function() {

		}
	});
		   }
});
