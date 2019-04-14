$('#login').on('submit', function(e) {	
	e.preventDefault();
	if ($.trim($("#emailid").val()) === ""|| $.trim($("#password").val()) === "") {
		/*	$('#sticky').empty();*/
			toastr.info('Please fill out the field');
				$('.loader').hide()
	}
	else
		{
	var phone_number = $("#emailid").val();
	var password = $("#password").val();
	
	//alert("register Value::" + EmailID + "--" + Password);
	var arr = {
			phone_number : phone_number,
			password : password
		};
	$.ajax({
		url :'login',
		type : 'POST',
		data :JSON.stringify(arr),
		dataType : "text",
		contentType : 'application/json; charset=utf-8',
		success : function(response) {
			alert(response);
			var ERROR_MSG1 = "Login Sucess";
			var ERROR_MSG2 = "Login Failure";
			var res=response.split(",");
			
			if(res[2]=="Building Owner")
				{
				window.location = "Building_Owner_Dashboard.html";
							
				sessionStorage.setItem("NKNAAVPIPNAIYLYAAVIUvE",res[0]);
				sessionStorage.setItem("EKNAAVPIPNAIYLYAAVIUvED",res[1]);
				sessionStorage.setItem("role",res[2]);
				}
			else if(res[2]=="Building Manager")
				{
				window.location = "Dashboard.html";
				var res=response.split(",");			
				sessionStorage.setItem("NKNAAVPIPNAIYLYAAVIUvE",res[0]);
				sessionStorage.setItem("EKNAAVPIPNAIYLYAAVIUvED",res[1]);
				sessionStorage.setItem("role",res[2]);
				
				}
			else if ((response == ERROR_MSG2)) {
				  //alert("Invalid EmailId and Password");

                swal(
                    {
                        title : "Invalid EmailId and Password",
                        type : 'error'
                    });
				  /*
					 $("#email").val('');
					 $("#password").val('');*/
			//		window.location = "index.html";
			
				
			}
			 else {
					window.location = "Dashboard.html";
					var res=response.split(",");			
					sessionStorage.setItem("NKNAAVPIPNAIYLYAAVIUvE",res[0]);
					sessionStorage.setItem("EKNAAVPIPNAIYLYAAVIUvED",res[1]);
					sessionStorage.setItem("role",res[2]);
					
			}
		},
		error : function() {

		}
	});
		}
});
