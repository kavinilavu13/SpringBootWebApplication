$('#changepassword').on('submit', function(e) {
	e.preventDefault();
	var username = $.trim($("#username").val());
	var mobile_number = $.trim($("#mobile_number").val());
	var email_id = $.trim($("#email_id").val());
	var password = $.trim($("#password").val());
	$.ajax({
		url : 'rest/meccaproject/changepassword',	
		type : 'POST',
		data : jQuery.param({
			username : username,
			mobile_number : mobile_number,
			email_id : email_id,
			password : password,			
		}),
		dataType : "text",
		success : function(response) {
			// alert(response);
			var ERROR_MSG1 = "Update Successfully";
			var ERROR_MSG2 = "Update Failed";
		
			if ((response == ERROR_MSG2)) {
				swal({
					title : "Update Failed",
					type : 'error'
				}, function() {
					window.location = "Changepassword.html";
				});

			}

		
			else {
				swal({
					title : "Password Changed Successfully",
					type : 'success'
				}, function() {
					window.location = "Changepassword.html";
				});

			}
		},
		error : function() {

		}
	});

});
