jQuery(document).ready(function() {
	var response = window.location.search;
	var url = response.replace("?",'');	
	var str=url.toString();
	var id=str.split("=");
	var id=id[1];	
	console.log(id);
	$.ajax({
		url : 'rest/meccaproject/getparticularservices',
		type : 'POST',
		data : jQuery.param({
			id : id
		}),
		dataType : "text",
		success : function(response) {
//alert(response);
			 var res = JSON.parse(response);	
			if(res==undefined || res==null || res=="" || res==[])
				{
		//	alert("null");		
			}
			else
				{
				 var servicetype_id = res[0].servicetype_id;			
					var servicetype_name =$.trim( res[0].servicetype_name);		
					var service_id = res[0].service_id;
					var service_name = res[0].service_name;
				//	console.log(servicetype_id+servicetype_name);	
					 $('#ServiceTypeId').val(servicetype_id);
		            $('#Service_Type_Name').val(servicetype_name);
		            if(service_name==undefined || service_name==null || service_name=="")
		            	{
		            	
		            	}
		            else
		            	{
		            	//console.log(res[0].service_id);
		            	 var service_id = service_id.split(',');
		            	 var service_name = service_name.split(',');
		            	$.each(service_name, function(index, value) {
								//	console.log(service_name[index]);
								//	console.log(service_id[index]);
								
						$("#AllServiceName").append('<div class="form-group  contact-repeater" id="service'+service_id[index]+'"><div data-repeater-list="repeater-group"  id="service'+service_id[index]+'" ><div class="input-group mb-1" data-repeater-item id="appendsevice"><input type="text" placeholder="New SubAmenities " class="form-control" id='+service_id[index]+' name="service_name" value="'+service_name[index]+'"> <span class="input-group-append" id="button-addon2"><button class="btn btn-danger remove" type="button" data-repeater-delete id="service'+service_id[index]+'" name="'+service_id[index]+'" ><i class="ft-x"></i></button></span></div></div></div>');
						$("#AllServiceNameId").append('<div class="form-group  contact-repeater" ><div data-repeater-list="repeater-group"  ><div class="input-group mb-1" data-repeater-item id="appendsevice"><input type="text" placeholder="New SubAmenities " class="form-control"  id='+service_id[index]+' name="service_name_id" value="'+service_id[index]+'" > <span class="input-group-append" id="button-addon2"><button class="btn btn-danger" type="button" data-repeater-delete  ><i class="ft-x"></i></button></span></div></div></div>');
							
							});
		            	}
		            
		            
				}				
			
		},
		error : function() {
		}
	});
})
$(document).on("click", ".remove" , function() {
	 	var hideclassname= $(this).attr('id');
		var deleteserviceid= $(this).attr('name');		
       $("#"+hideclassname).remove();      
       var response = " Deleted";
   	var ERROR_MSG = " Deleted";
   	if ((response == ERROR_MSG)) {
   		swal({
   			title : "Are you sure?",
   			text : "If Yes Amenities  Will Be Deleted Permanently!",
   			type : "warning",
   			showCancelButton : !0,
   			confirmButtonColor : "#DD6B55",
   			confirmButtonText : "Yes, delete it!",
   			closeOnConfirm : !1
   		}, function() {
   			$.ajax({
   				url : 'rest/meccaproject/deleteserviceid',
   				type : 'POST',
   				data : jQuery.param({
   					deleteserviceid:deleteserviceid
   				}),
   				dataType : "text",
   				success : function(response) {
   					var ERROR_MSG = "Deleted Error";
					if ((response == ERROR_MSG)) {
						swal({
							title : "Not Deleted!",
							type : 'error'
						});
						$('.loader').hide()
					} else {
						swal({
							title : "Deleted  Successfully!",
							type : 'success'
						});
						$('.loader').hide()
					}
   				},
   				error : function() {
   				}  				
   			})
   		})
   	}
});		


$("#addclick").click(function(){

	$("#hideinput").show();
	});