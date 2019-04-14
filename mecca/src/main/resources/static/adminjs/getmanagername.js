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
							 swal({
								  title: "There are No Manager Name available.Please add",
								 	  type: "info",
								  showCancelButton: false,
								  closeOnConfirm: false,
								  showLoaderOnConfirm: true
								}, function () {
									window.location = "AddUser.html"
								});	
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
