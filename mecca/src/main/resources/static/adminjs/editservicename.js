$('#editservicename').click(function(){
   var ServiceType_id =$.trim($("#ServiceType").val());	  
   var newservice_name = [];
   $.each($("input[name*='[addservice]']"), function(){ 
		 //  alert(favorite.push($(this).val()) );
	   newservice_name.push($(this).val());
	   });
	 //  alert("newservice_name list  name are: " + newservice_name.join(", "));	 
	   newservice_name= newservice_name.join(", ");
  //alert(newservice_name);  	   
   var service_name = [];
   $.each($("input[name ='service_name']"), function(){ 
	   service_name.push( $(this).attr('id')+"-"+$(this).val());
   });
  // alert("service name1 are: " + service_name.join(", "));
   service_name=service_name.join(", ");   
 //  alert(service_name);
   var service_name_id = [];
   $.each($("input[name='service_name_id']"), function(){ 	 
	   service_name_id.push($(this).val());
   });
 //  alert(" service_name_id are: " + service_name_id.join(", "));
   service_name_id=service_name_id.join(", ");
// alert(service_name_id);
	$.ajax({
		url :'rest/meccaproject/editservicename',	
		type : 'POST',
		data : jQuery.param({
			
			ServiceType_id:ServiceType_id,
		service_name : service_name,
		newservice_name : newservice_name,
		service_name_id:service_name_id
		
		}),
		dataType : "text",
		success : function(response) {
		alert(response);
		/*	var ERROR_MSG1 = "Registeration successfully";
			var ERROR_MSG2 = "Registeration Failed";
			var ERROR_MSG3 = "Already Registered";
			if ((response == ERROR_MSG2)) {
                swal(
                    {
                        title : "Registeration Failed.!",
                        type : 'error'
                    },
                    function() {
                      //  window.location = "buildingdetails.html";
                    });

			}

			else if ((response == ERROR_MSG3)) {

                swal(
                    {
                        title : "Already building details Registered.!",
                        type : 'error'
                    },
                    function() {
                    	// window.location = "buildingdetails.html";
                    });
            }

			else {
                swal(
                    {
                        title : "Update successfully.!",
                        type : 'success'
                    },
                    function() {
                       // window.location = "buildingdetails.html";
                    });

            }*/
		},
		error : function() {

		}
	});

});
