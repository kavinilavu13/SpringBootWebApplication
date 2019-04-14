$( "#servicepart" ).click(function() {     
     var all_servicename_id = [];
     var servicetype_id = [];
     $.each($("input[name='service']:checked"), function(){            
    	// all_servicename_id.push(  $(this).attr('id') +"-"+  $(this).val());
    	 all_servicename_id.push($(this).val());     	
    	 //id.push( $(this).attr('id'));
     });
    // alert("My service name are: " + all_servicename_id.join(", "));
   overall_service= all_servicename_id.join(", ");
     // alert("My service id are: " + id.join(", "));
     
 	$.ajax({
		url :'rest/meccaproject/overall_service',
		
		type : 'POST',
		data : jQuery.param({
			overall_service : overall_service
			
		}),
		dataType : "text",
		success : function(response) {
		//alert(response);
			var ERROR_MSG1 = "Registeration successfully";
			var ERROR_MSG2 = "Registeration Failed";
			var ERROR_MSG3 = "Already Registered";
			/*if ((response == ERROR_MSG2)) {
                swal(
                    {
                        title : "Registeration Failed.!",
                        type : 'error'
                    },
                    function() {
                        window.location = "buildingdetails.html";
                    });

			}

			else if ((response == ERROR_MSG3)) {

                swal(
                    {
                        title : "Already building details Registered.!",
                        type : 'error'
                    },
                    function() {
                    	 window.location = "buildingdetails.html";
                    });
            }

			else {
                swal(
                    {
                        title : "Registeration successfully.!",
                        type : 'success'
                    },
                    function() {
                        window.location = "buildingdetails.html";
                    });
            }*/

		},
		error : function() {

		}
	});


     
	});