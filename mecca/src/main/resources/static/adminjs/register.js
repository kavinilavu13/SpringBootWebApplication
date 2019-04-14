$('#register').on('submit', function(e) {	 
	e.preventDefault();	
	if ($.trim($("#name").val()) === ""|| $.trim($("#mobilenumber").val()) === ""	|| $.trim($("#emailid").val()) === ""|| $.trim($("#password").val()) === "") {	
		toastr.info('Please fill out the field');
	
} else {
	$('.loader').show();
	var name =$.trim($("#name").val());
	var mobilenumber = $.trim($("#mobilenumber").val());
	var emailid = $.trim($("#emailid").val());
    var password =  $.trim($("#password").val());
	$.ajax({
		url : 'rest/meccaproject/register',		
		type : 'POST',
		data : jQuery.param({
			name : name,
			mobilenumber : mobilenumber,
			emailid : emailid,
			password:password
		}),
		dataType : "text",
		success : function(response) {
			var ERROR_MSG1 = "Registeration successfully";
			var ERROR_MSG2 = "Registeration Failed";
			var ERROR_MSG3 = "Already Registered";

			if ((response == ERROR_MSG2)) {
				$('.loader').hide();
                swal(
                    {
                        title : "Registration Failed",
                        type : 'error'
                    },
                    function() {
                        window.location = "register.html";
                    });

			}

			else if ((response == ERROR_MSG3)) {
				$('.loader').hide();
                swal(
                    {
                        title : "Already Registered",
                        type : 'error'
                    },
                    function() {
                        $("#EmailID").val('');
                    });
            }

			else {
				$('.loader').hide();
                swal(
                    {
                        title : "Registered successfully",
                        type : 'success'
                    },
                    function() {
                        window.location = "index.html";
                    });

            }
		},
		error : function() {

		}
	});
}
});
