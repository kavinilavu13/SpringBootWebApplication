jQuery(document).ready(function() {	

$("#hideinput").hide();
$("#AllServiceNameId").hide();
$('#ServiceType').change(function(){ 
	  var servicetype_id = $(this).val();
	  if ($.isNumeric($(this).val()))
		  {
	$.ajax({
		url : 'rest/meccaproject/getparticularservicename',
		type : 'POST',
		data : jQuery.param({
			servicetype_id:servicetype_id
		}),
		dataType : "text",
		success : function(response) {	
			toastr.clear();
			if (response==''||response == 'undefined' ||response== null || response=="[]"){ 
				 $("#AllServiceName").empty();		
				toastr.clear();
				toastr.info('<a class="close-toastr"> There are no SubAmenities.So Add New </a> .', 'Note!', {positionClass: 'toast-bottom-right', containerId: 'toast-bottom-right'},{"showDuration":0.5});	
				$(document).click(function() {
					toastr.clear();
				});
	
			}
			else{ 			
				var res = JSON.parse(response);
				 $("#AllServiceName").empty();				
					$.each(res, function(index, value) {
					/*$("#AllServiceNameId").append('<div data-repeater-list="repeater-list" class="file-repeater"><div data-repeater-item ><div class="row mb-1" id="appendsevice"><div class="col-9 col-xl-10 "><div class="inputfile-box"><div class="form-group"> <input type="text" id='+res[index].service_id+' class="form-control" name="service_name_id" value="'+res[index].service_id+'"></div></div></div><div class="col-6 col-xl-1"><button type="button" data-repeater-delete class="btn btn-icon btn-danger mr-1 class="hideme"><i class="ft-x"></i></button></div></div></div></div>	');				
					
					$("#AllServiceName").append('<div id="service'+res[index].service_id+'"><div data-repeater-list="repeater-list"  class="file-repeater"><div data-repeater-item ><div class="row mb-1" id="appendsevice"><div class="col-9 col-xl-10 "><div class="inputfile-box"><div class="form-group"> <input type="text" id='+res[index].service_id+' class="form-control" name="service_name" value="'+res[index].service_name+'"></div></div></div><div class="col-6 col-xl-1"><a id="service'+res[index].service_id+'" name="'+res[index].service_id+'" class="btn btn-icon btn-danger mr-1 remove"><i class="ft-x" style="color: white;"></i></a></div></div></div></div></div>	');
*/
					
				$("#AllServiceName").append('<div class="form-group  contact-repeater" id="service'+res[index].service_id+'"><div data-repeater-list="repeater-group"  id="service'+res[index].service_id+'" ><div class="input-group mb-1" data-repeater-item id="appendsevice"><input type="text" placeholder="New SubAmenities " class="form-control" id='+res[index].service_id+' name="service_name" value="'+res[index].service_name+'"> <span class="input-group-append" id="button-addon2"><button class="btn btn-danger remove" type="button" data-repeater-delete id="service'+res[index].service_id+'" name="'+res[index].service_id+'" ><i class="ft-x"></i></button></span></div></div></div>');
					$("#AllServiceNameId").append('<div class="form-group  contact-repeater" ><div data-repeater-list="repeater-group"  ><div class="input-group mb-1" data-repeater-item id="appendsevice"><input type="text" placeholder="New SubAmenities " class="form-control"  id='+res[index].service_id+' name="service_name_id" value="'+res[index].service_id+'" > <span class="input-group-append" id="button-addon2"><button class="btn btn-danger" type="button" data-repeater-delete  ><i class="ft-x"></i></button></span></div></div></div>');
					
					});
					
					$(".loader").hide();
						}				 
		},
		error : function() {
		}
	});    
		  }
	  else
	  {
		  
		  $("#AllServiceName").empty();	
	      toastr.clear();
		  toastr.info('<a class="close-toastr"> Add New SubAmenities </a> .', 'Note!', {positionClass: 'toast-bottom-right', containerId: 'toast-bottom-right'},{"showDuration":0.5});	
		 $(document).click(function() {
			toastr.clear();
		});

	  }	
});
});
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