jQuery(document).ready(function() {
		$.ajax({
		url : 'rest/meccaproject/getservicetype',
		type : 'POST',
		data : jQuery.param({
		}),
		dataType : "text",
		success : function(response) {
			//alert(response);
			 var res = JSON.parse(response);			
			var service_type_id = res[0].service_type_id;
			var service_type_name = res[0].service_type_name;			
						 if(service_type_name == ''||service_type_name == 'undefined' || service_type_name== null  )
				 {	
							 
				 }
			 else
				 {
					$.each(res, function(index, value) {				
					  /* alert(index + ': ' + value); */						
					$("#ServiceType").append('<option value='+ res[index].service_type_id+'  name='+ res[index].service_type_name+'>'+ res[index].service_type_name+'</option>');		
					});
					
				 }
		},
		error : function() {
		}
	});
})
