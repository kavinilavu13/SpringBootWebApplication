jQuery(document).ready(function() {	
	
	var role=sessionStorage.getItem("role");
	var email_id=sessionStorage.getItem("EKNAAVPIPNAIYLYAAVIUvED");
	var name=sessionStorage.getItem("NKNAAVPIPNAIYLYAAVIUvE");
	
    $.ajax({
        url : 'rest/meccaproject/getoverallbuildingbookingcount',
        type : 'POST',
        data : jQuery.param({
        	role:role,
        	email_id:email_id,
        	name:name
        }),
        dataType : "text",
        success : function(response) {
        	
        	 var res = JSON.parse(response);			
 			var count = res[0].count;
 	
 			$("#overallbuildingbookingcount").text(count);
 		        },
        error : function() {
        }
    });

    
});