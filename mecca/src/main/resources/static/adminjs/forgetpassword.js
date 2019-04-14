$('#forgetpassword').on('submit', function(e) {
    e.preventDefault();
   emailid= sessionStorage.getItem("EKNAAVPIPNAIYLYAAVIUvED");
   name= sessionStorage.getItem("NKNAAVPIPNAIYLYAAVIUvE");
    var oldpassword = $("#oldpassword").val();
    var newpassword = $("#password").val();
    $.ajax({
        url : 'rest/meccaproject/resetpassword',
        type : 'POST',
        data : jQuery.param({
        	emailid : emailid,
        	oldpassword : oldpassword,
        	newpassword:newpassword,
        	name:name
        }),
        dataType : "text",
        success : function(response) {
          //  alert(response);
            var ERROR_MSG1 = "Reset Password Sucessfully";
            var ERROR_MSG2 = "Email Id Is Wrong";
            if ((response == ERROR_MSG2)) {
                //alert("Invalid EmailId and Password");
                swal(
                    {
                        title : "Email Id Is Wrong.!",
                        type : 'error'
                    });
            }
            else {
                swal(
                    {
                        title : "Password Reset Sucessfully.!",
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

});
