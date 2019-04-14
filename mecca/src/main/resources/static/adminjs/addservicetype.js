
$('#servicetype').on('click', function(e) {	 
	e.preventDefault();
   var service_Type =$.trim($("#newservicetype").val());	
    var service_name = [];
   $.each($("input[name*='[newservicename]']"), function(){ 
	 //  alert(favorite.push($(this).val()) );
	   service_name.push($(this).val());
   });
   //alert("service list  name are: " + service_name.join(", "));
 
   service_name= service_name.join(", ");
//alert("buildingdetails::"+service_Type+"--"+service_name);
	$.ajax({
		url :'rest/meccaproject/servicetype',	
		type : 'POST',
		data : jQuery.param({
			service_Type : service_Type,
			service_name : service_name,
			
		}),
		dataType : "text",
		success : function(response) {
		//alert(response);
			var ERROR_MSG1 = "Registeration successfully";
			var ERROR_MSG2 = "Registeration Failed";
			var ERROR_MSG3 = "Already Registered";
			if ((response == ERROR_MSG2)) {
                swal(
                    {
                        title : "Registeration Failed.!",
                        type : 'error'
                    },
                    function() {
                       window.location = "AddBuildingDetails.html";
                    });

			}

			else if ((response == ERROR_MSG3)) {

                swal(
                    {
                        title : "Already building details Registered.!",
                        type : 'error'
                    },
                    function() {
                    	 window.location = "AddBuildingDetails.html";
                    });
            }

			else {
                swal(
                    {
                        title : "Registeration successfully.!",
                        type : 'success'
                    },
                    function() {
                   /* 	$('#thisdiv').load(document.URL +  ' #thisdiv');
*/                        window.location = "AddBuildingDetails.html";
                    });

            }
		},
		error : function() {

		}
	});

});
