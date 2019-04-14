$('#buildingdetails').on('submit', function(e) {	 
	e.preventDefault();
var building_name =$.trim($("#building_name").val());	
var doe =$.trim($("#doe").val());
	var email_id =$.trim($("#email_id").val());
    var mobile_number =$.trim($("#mobile_number").val());
    var owner_id =$.trim($("#owner_id").val());
    var no_of_floor = $.trim($("#no_of_floor").val());
    var description =$.trim($("#description").val());
    
    
    
    
//alert("buildingdetails::"+building_name+"--"+doe+"--"+email_id+"--"+mobile_number+"--"+owner_id+"--"+no_of_floor+"-"+description);
	$.ajax({
		url :'rest/meccaproject/buildingdetails',
		/*url : 'rest/mecca/buildingdetails',*/
		type : 'POST',
		data : jQuery.param({
			building_name : building_name,
			doe : doe,
			email_id : email_id 	,
			mobile_number:mobile_number,
			owner_id:owner_id,
			no_of_floor:no_of_floor,
            description:description		
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

            }
		},
		error : function() {

		}
	});

});
