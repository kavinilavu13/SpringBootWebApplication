
jQuery(document).ready(function() {

	$("#hideerror").hide();
	  $('#remove-building-image').click(function() {
		
		 var building_image = [];
          $.each($("input[name='buildingcheckbox']:checked"), function(){            
        	 building_image.push($(this).val());        	 
          });
      //    alert("Building image: " + building_image.join(","));

          building_image=building_image.join(",");

	var response = window.location.search;
	var url = response.replace("?",'');	
	var str=url.toString();
	var id=str.split("=");
	var id=id[1];
	
	if(building_image == ''||building_image == 'undefined' || building_image== null  )
		{
		swal(
                {
                    title : "Select atlest One  Image",
                    
                });
		}
	else
		{
	$.ajax({
		url : 'rest/meccaproject/deletebuildingimage',
		type : 'POST',
		data : jQuery.param({
			id : id,
			image:building_image
		}),
		dataType : "text",
		success : function(response) {
			//alert(response);
			var ERROR_MSG1 = "Deleted Successfully";
			var ERROR_MSG2 = "Deleted Failure";		
			if ((response == ERROR_MSG2)) {
                swal(
                    {
                        title : "Deleted Failure",
                        type : 'error'
                    },
                    function() {
                       // window.location = "BuildingList.html";
                    });
			}
			else if((response == ERROR_MSG1)) {
				
                swal(
                    {
                        title : "Deleted Successfully",
                        type : 'success'
                    },
                    function() {
                    // window.location = "BuildingList.html"; 
                    	location.reload();
                    });
            }		
		},
		error : function() {
		}
	});
		}
});
	
	  });

jQuery(document).ready(function() {

	$("#hideerror").hide();
	  $('#remove-ground-image').click(function() {		  
		 var ground_image = [];
		  $.each($("input[name='groundcheckbox']:checked"), function(){             
        	  ground_image.push($(this).val());        	 
          });
        //  alert("Ground: " + ground_image.join(","));

          ground_image=ground_image.join(",");
       building_type="ground_floor";
	var response = window.location.search;
	var url = response.replace("?",'');	
	var str=url.toString();
	var id=str.split("=");
	var id=id[1];
	
	if(ground_image == ''||ground_image == 'undefined' || ground_image== null  )
		{
		swal(
                {
                    title : "Select atlest One  Image",
                    
                });
		}
	else
		{
	$.ajax({
		url : 'rest/meccaproject/deletefloorimage',
		type : 'POST',
		data : jQuery.param({
			id : id,
			image:ground_image,
			type:building_type
		}),
		dataType : "text",
		success : function(response) {
			//alert(response);
			var ERROR_MSG1 = "Deleted Successfully";		
			var ERROR_MSG2 = "Deleted Failure";		
			if ((response == ERROR_MSG2)) {
                swal(
                    {
                        title : "Deleted Failure",
                        type : 'error'
                    },
                    function() {
                       // window.location = "BuildingList.html";
                    });
			}
			else if((response == ERROR_MSG1))
			
			{
				
                swal(
                    {
                        title : "Deleted Successfully",
                        type : 'success'
                    },
                    function() {
                    // window.location = "BuildingList.html";     
                    	location.reload();
                    });
            }		
		},
		error : function() {
		}
	});
		}
});
	
	  });
jQuery(document).ready(function() {

	$("#hideerror").hide();
	  $('#remove-floor-image').click(function() {
	
		 var floor_image = [];
		  $.each($("input[name='floorcheckbox']:checked"), function(){             
			  floor_image.push($(this).val());        	 
          });
         // alert("floor: " +floor_image.join(","));

          floor_image=floor_image.join(",");
building_type="floor";
	var response = window.location.search;
	var url = response.replace("?",'');	
	var str=url.toString();
	var id=str.split("=");
	var id=id[1];

	if(floor_image == ''||floor_image == 'undefined' || floor_image== null  )
		{
		swal(
                {
                    title : "Select atlest One  Image",
                    
                });
		}
	else
		{
	$.ajax({
		url : 'rest/meccaproject/deletefloorimage',
		type : 'POST',
		data : jQuery.param({
			id : id,
			image:floor_image,
			type:building_type
		}),
		dataType : "text",
		success : function(response) {
			//alert(response);
			var ERROR_MSG1 = "Deleted Successfully";		
			var ERROR_MSG2 = "Deleted Failure";		
			if ((response == ERROR_MSG2)) {
                swal(
                    {
                        title : "Deleted Failure",
                        type : 'error'
                    },
                    function() {
                       // window.location = "BuildingList.html";
                    	location.reload();
                    });
			}
			else if((response == ERROR_MSG1)) {
				
                swal(
                    {
                        title : "Deleted Successfully",
                        type : 'success'
                    },
                    function() {
                    	location.reload();
                    // window.location = "BuildingList.html"; 
                   //  $("#relodimage").html(response);
                    });
            }		
		},
		error : function() {
		}
	});
		}
});
	
	  });




jQuery(document).ready(function() {

	$("#hideerror").hide();
	  $('#remove-terrace-image').click(function() {
		  
		 var terrace_image = [];
		  $.each($("input[name='terracecheckbox']:checked"), function(){             
			  terrace_image.push($(this).val());        	 
          });
       //  alert("floor: " +terrace_image.join(","));

          terrace_image=terrace_image.join(",");
building_type="terrace";
	var response = window.location.search;
	var url = response.replace("?",'');	
	var str=url.toString();
	var id=str.split("=");
	var id=id[1];
	
	if(terrace_image == ''||terrace_image == 'undefined' || terrace_image== null  )
		{
		swal(
                {
                    title : "Select atlest One  Image",
                    
                });
		}
	else
		{
	$.ajax({
		url : 'rest/meccaproject/deletefloorimage',
		type : 'POST',
		data : jQuery.param({
			id : id,
			image:terrace_image,
			type:building_type
		}),
		dataType : "text",
		success : function(response) {
			
			var ERROR_MSG1 = "Deleted Successfully";		
			var ERROR_MSG2 = "Deleted Failure";		
			if ((response == ERROR_MSG2)) {
                swal(
                    {
                        title : "Deleted Failure",
                        type : 'error'
                    },
                    function() {
                       // window.location = "BuildingList.html";
                    });
			}
			else if((response == ERROR_MSG1)) {
				
                swal(
                    {
                        title : "Deleted Successfully",
                        type : 'success'
                    },
                    function() {
                    	location.reload();
                    // window.location = "BuildingList.html";                        
                    });
            }		
		},
		error : function() {
		}
	});
		}
});
	
	  });

jQuery(document).ready(function() {

	$("#hideerror").hide();
	  $('#remove-room-image').click(function() {
		 
		 var room_image = [];
		  $.each($("input[name='roomcheckbox']:checked"), function(){             
			  room_image.push($(this).val());        	 
          });
        //  alert("room: " +room_image.join(","));

          room_image=room_image.join(",");
building_type="floor";
	var response = window.location.search;
	var url = response.replace("?",'');	
	var str=url.toString();
	var id=str.split("=");
	var id=id[1];

	if(room_image == ''||room_image == 'undefined' || room_image== null  )
		{
		swal(
                {
                    title : "Select atlest One  Image",
                    
                });
		}
	else
		{
	$.ajax({
		url : 'rest/meccaproject/deleteroomimage',
		type : 'POST',
		data : jQuery.param({
			id : id,
			image:room_image,
			type:building_type
		}),
		dataType : "text",
		success : function(response) {
			//alert(response);
			var ERROR_MSG1 = "Deleted Successfully";		
			var ERROR_MSG2 = "Deleted Failure";		
			if ((response == ERROR_MSG2)) {
                swal(
                    {
                        title : "Deleted Failure.!",
                        type : 'error'
                    },
                    function() {
                       // window.location = "BuildingList.html";
                    });
			}
			else if((response == ERROR_MSG1)) {
				
                swal(
                    {
                        title : "Deleted Successfully",
                        type : 'success'
                    },
                    function() {
                    	location.reload();
                    // window.location = "BuildingList.html";                        
                    });
            }		
		},
		error : function() {
		}
	});
		}
});
	
	  });

jQuery(document).ready(function() {

	$("#hideerror").hide();
	  $('#remove-terrace-room-image').click(function() {
		
		 var terrace_room_image = [];
		  $.each($("input[name='terraceroomcheckbox']:checked"), function(){             
			  terrace_room_image.push($(this).val());        	 
          });
       //   alert("room: " +terrace_room_image.join(","));

          terrace_room_image=terrace_room_image.join(",");
building_type="terrace";
	var response = window.location.search;
	var url = response.replace("?",'');	
	var str=url.toString();
	var id=str.split("=");
	var id=id[1];
	
	if(terrace_room_image == ''||terrace_room_image == 'undefined' || terrace_room_image== null  )
		{
		swal(
                {
                    title : "Select atlest One  Image",
                    
                });
		}
	else
		{
	$.ajax({
		url : 'rest/meccaproject/deleteroomimage',
		type : 'POST',
		data : jQuery.param({
			id : id,
			image:terrace_room_image,
			type:building_type
		}),
		dataType : "text",
		success : function(response) {
			//alert(response);
			var ERROR_MSG1 = "Deleted Successfully";		
			var ERROR_MSG2 = "Deleted Failure";		
			if ((response == ERROR_MSG2)) {
                swal(
                    {
                        title : "Deleted Failure",
                        type : 'error'
                    },
                    function() {
                       // window.location = "BuildingList.html";
                    });
			}
			else if((response == ERROR_MSG1)) {
				
                swal(
                    {
                        title : "Deleted Successfully",
                        type : 'success'
                    },
                    function() {
                    	location.reload();
                    // window.location = "BuildingList.html";                        
                    });
            }		
		},
		error : function() {
		}
	});
		}
});
	
	  });

