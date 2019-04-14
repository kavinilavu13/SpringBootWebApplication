jQuery(document).ready(function() {	
   emailid= sessionStorage.getItem("EKNAAVPIPNAIYLYAAVIUvED"); 
    $.ajax({
        url : 'rest/meccaproject/getlogindetails',
        type : 'POST',
        data : jQuery.param({
        	emailid : emailid        	
        }),
        dataType : "text",
        success : function(response) {
        	
        	 var res = JSON.parse(response);			
 			var name = res[0].name;
 		
 			var phone_number = res[0].phone_number;
 			var email_id = res[0].email_id;
 			$('#username').val(name);
 				$('#mobile_number').val(phone_number);
 				$('#email_id').val(email_id);
 		        },
        error : function() {
        }
    });

    
});
