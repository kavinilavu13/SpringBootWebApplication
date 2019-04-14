$('#checkemail-id').on('submit', function(e) {	
	e.preventDefault();
	var name =$.trim($("#name").val());
	var emailid =$.trim($("#emailid").val());
	var mobilenumber = $.trim($("#mobilenumber").val());

	$.ajax({
		url :'rest/meccaproject/checkemailid',
		type : 'POST',
		data : jQuery.param({
			emailid : emailid
			}),
		dataType : "text",
		success : function(response) {
			//alert(response);
			var ERROR_MSG1 = "Login Sucess";
			var ERROR_MSG2 = "Login Failure";

			if ((response == ERROR_MSG2)) {
				  //alert("Invalid EmailId and Password");

                swal(
                    {
                        title : "Invalid EmailId",
                        type : 'error'
                    });
				  /*
					 $("#email").val('');
					 $("#password").val('');*/
			//		window.location = "index.html";
			
				
			}
			 else {
				window.location = "ForgetPassword.html";
				var res=response.split(",");				
				sessionStorage.setItem("NKNAAVPIPNAIYLYAAVIUvE",res[1]);
				sessionStorage.setItem("EKNAAVPIPNAIYLYAAVIUvED",res[0]);
		
			}
		},
		error : function() {

		}
	});

});
