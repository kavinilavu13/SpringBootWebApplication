/*$('#servicepart').click(function() {
		var wifi =$.trim($("#wifiservice").val());
		alert("value"+wifi);
		var id = $('#wifiservice').attr('id');
		var name = $("#wifiservice").attr('name');
	 alert("id"+id);
	 alert("name"+name);

});
*/
$("#servicepart").click(function(){
    var service1 = [];
	var servicetype1="";
    $.each($("input[name='Wireless Fidelity']:checked"), function(){            
    	service1.push($(this).val());
    	servicetype1 = $(this).attr('name');
    });
    alert("selected details: " + service1.join(", "));
    var wifi= servicetype1+"-"+service1.join(", ");
    alert(wifi);
    var service2 = [];
    var servicetype2="";
    $.each($("input[name='Food And Drink']:checked"), function(){            
    	service2.push($(this).val());
    	servicetype2 = $(this).attr('name');
    	
    });  
    var food= servicetype2+"-"+service2.join(", ");
    alert(food);
    
    var service3 = [];
    var servicetype3="";
    $.each($("input[name='Cleaning Services']:checked"), function(){            
    	service3.push($(this).val());
    	servicetype3 = $(this).attr('name');
    	
    });  
    var cleaning= servicetype3+"-"+service3.join(", ");
    alert(cleaning);  
	$.ajax({
		url :'rest/meccaproject/service',
		/*url : 'rest/mecca/buildingdetails',*/
		type : 'POST',
		data : jQuery.param({
			wifi : wifi,
			food : food,
			cleaning : cleaning	
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
                        title : "Registeration Failed",
                        type : 'error'
                    },
                    function() {
                        window.location = "buildingdetails.html";
                    });

			}

			else if ((response == ERROR_MSG3)) {

                swal(
                    {
                        title : "Already building details Registered",
                        type : 'error'
                    },
                    function() {
                    	 window.location = "buildingdetails.html";
                    });
            }

			else {
                swal(
                    {
                        title : "Registeration successfully",
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
$('#servicepart').on('click', function(e) {	 
	e.preventDefault();
    var wifi =$.trim($("#wifiservice").val());	
   alert(wifi);
    
    
    
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
