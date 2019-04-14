jQuery(document).ready(function() {
	var response = window.location.search;
	var url = response.replace("?",'');	
	var str=url.toString();
	var id=str.split("=");
	var id=id[1];	
	$.ajax({
		url : 'rest/meccaproject/particularbuildingservice',
		type : 'POST',
		data : jQuery.param({
			id : id
		}),
		dataType : "text",
		success : function(response) {
		//alert(response);
			
			
		},
		error : function() {
		}
	});
})
