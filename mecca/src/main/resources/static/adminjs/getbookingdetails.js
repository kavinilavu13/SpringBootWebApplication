jQuery(document).ready(function() {	
	var role=sessionStorage.getItem("role");
	var email_id=sessionStorage.getItem("EKNAAVPIPNAIYLYAAVIUvED");
	var name=sessionStorage.getItem("NKNAAVPIPNAIYLYAAVIUvE");
	 $.ajax({
         url: 'rest/meccaproject/getbookingdetails',
         type: 'POST',
         data: jQuery.param({
        		role:role,
            	email_id:email_id,
            	name:name
         }) ,
         dataType: "text",
         success: function (response) {
        var dataSet = JSON.parse(response);

                var i=1;
                 $('.file-export').dataTable(
                     {dom: 'Bfrtip',
                         responsive: true,
                         buttons: [
                        	 {
                                 extend: 'copy',
                                 exportOptions: {
                              	   columns: [0,1,2,3,4,5,7,8,9,10,11,12,13,14,15,16,17,18]
                                 }
                             },
                             {
                                 extend: 'csv',
                                 exportOptions: {
                              	   columns:[0,1,2,3,4,5,7,8,9,10,11,12,13,14,15,16,17,18]
                                 }
                             },
                             {
                                 extend: 'excel',
                                 exportOptions: {
                              	   columns: [0,1,2,3,4,5,7,8,9,10,11,12,13,14,15,16,17,18]
                                 }
                             },
                             {
                                 extend: 'pdf',
                                 exportOptions: {
                                	 columns:[0,1,2,3,4,5,7,8,9,10,11,12,13,14,15,16,17,18]
                                 }
                             },
                             {
                                 extend: 'print',
                                 exportOptions: {
                                	 columns:[0,1,2,3,4,5,7,8,9,10,11,12,13,14,15,16,17,18]
                                 }
                             }],                       
                         "aaData": dataSet,
                         "aoColumns": [
                        	/*  {
                                  "mData": "id",
                                  className: "id"
                              },*/
                              {
                                  "mData":"cusname",
                                  className:"cusname"
                              
                              },
                        	  
                            {
                                 "mData": "building_name",
                                 className: "building_name"
                             },
                             {
                                 "mData": "check_in_date",
                                 className: "check_in_date"
                             },
                           
                             
                             {
                                 "mData": "check_out_date",
                                 className: "check_out_date"
                             },
                            {
                            "mData": "adults",
                            className: "adults"
                        },
                       	  {
                                 "mData":"children",
                                 className:"children"
                             
                             },
                             
                             {
                                 "mData": "view",                                 
                                 render: function (dataSet, type, row) {
                                	 if(role=="Building Owner")
                                		 
                                		 {
                                		 if (dataSet) {
                                             return '<td> <a href="BuildingOwner_ViewBookingList.html?temp='+dataSet+'"><i class="la la-edit"></i></a></td>';
                                         }
                                         return dataSet
                                		 }
                                	 else
                                		 {
                                		 if (dataSet) {
                                             return '<td> <a href="ViewBooking.html?temp='+dataSet+'"><i class="la la-edit"></i></a></td>';
                                         }
                                         return dataSet
                                		 }
                                     ;
                                 },
                         	   className: "view"
                             },
                             {
                                 "mData":"phone_number",
                                 className:"phone_number"
                             
                             },
                           {
                                "mData": "date_of_birth",
                                className: "date_of_birth"
                            },
                            
                            {
                                "mData": "gender",
                                className: "gender"
                            },
                            {
                                "mData": "emailid",
                                className: "emailid"
                            }
                            ,
                      	  {
                                "mData":"street",
                                className:"street"
                            
                            },
                          {
                               "mData": "area",
                               className: "area"
                           },
                           {
                               "mData": "city",
                               className: "city"
                           },
                         
                           
                           {
                               "mData": "district",
                               className: "district"
                           },
                          {
                          "mData": "country",
                          className: "country"
                      },
                     	  {
                               "mData":"state",
                               className:"state"
                           
                           },
                          {
                              "mData": "nationality",
                              className: "nationality"
                          }
                           ,
                           {
                                "mData": "zip_code",
                                className: "zip_code"
                            }
                         
                                 ]
                     
                 });
               
                 
                 $('.buttons-copy, .buttons-csv, .buttons-print, .buttons-pdf, .buttons-excel').addClass('btn btn-primary mr-1');
           $(document).ready(function() {	             		
	         		    $(".id").hide();
	         			//$(".servicetype_id").hide();	 
	         	       			
	         		});
    		},
     error: function () {
     }
 });
});	
