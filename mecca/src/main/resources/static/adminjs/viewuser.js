jQuery(document).ready(function() {	
	 $.ajax({
         url: 'profile',
         type: 'GET',
         data: jQuery.param({}) ,
         dataType: "text",
         success: function (response) {
        var dataSet = JSON.parse(response);
   //   alert(dataSet);
        	// var dataSet = JSON.parse(response);
        	//alert(dataSet);
                var i=1;
                 $('.file-export').dataTable(
                     {dom: 'Bfrtip',
                         responsive: true,
                         
                         buttons: [
                        	 {
                                 extend: 'copy',
                                 exportOptions: {
                              	   columns: [0,2,3,4,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21]
                                 }
                             },
                             {
                                 extend: 'csv',
                                 exportOptions: {
                              	   columns: [0,2,3,4,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21]
                                 }
                             },
                             {
                                 extend: 'excel',
                                 exportOptions: {
                              	   columns: [0,2,3,4,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21]
                                 }
                             },
                             {
                                 extend: 'pdf',
                                 exportOptions: {
                                	 columns:[0,2,3,4,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21]
                                 }
                             },
                             {
                                 extend: 'print',
                                 exportOptions: {
                                	 columns:[0,2,3,4,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21]
                                 }
                             }],
                 
                        
                         "aaData": dataSet,
                         "aoColumns": [
                        	 
                        	  {
                                  "mData":"name",
                                  className:"name"
                              
                              },
                              {
                                  "mData":"id",
                                  className:"id"
                              
                              },
                              {
                                  "mData": "email_id",
                                  className: "email_id"
                              }
                             ,
                             {
                                 "mData": "role",
                                 className: "role"
                             },
                             {
                                 "mData": "id",                                 
                                 render: function (dataSet, type, row) {
                                     if (dataSet) {
                                         return '<td> <a href="EditUser.html?temp='+dataSet+'"><i class="la la-edit"></i></a></td>';
                                     }
                                     return dataSet;
                                 },
                         	   className: "view"
                             },
                             
                             {
                                 "mData": "id",                                 
                                 render: function (dataSet, type, row) {
                                     if (dataSet) {
                                         return '<td> <a href="#" class="getparticularuserlist"><i class="la la-trash" style="color:red;"></i></a></td>';
                                     }
                                     return dataSet;
                                 },
                         	   className: "delete"
                             }
                              ,
                              
                              {
                                   "mData": "phone_number",
                                   className: "phone_number"
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
                                  "mData": "street",
                                  className: "street"
                              },
                              {
                                  "mData":"area",
                                  className:"area"
                              
                              },

                              {
                                  "mData":"city",
                                  className:"city"
                              
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
                                  "mData": "state",
                                  className: "state"
                              
                              },
                              {
                                  "mData": "nationality",
                                  className: "nationality"
                              
                              },
                              {
                                  "mData": "zip_code",
                                  className: "zip_code"
                              },
                             {
                                 "mData": "whats_app_number",
                                 className: "whats_app_number"
                             },
                             {
                                 "mData": "facebook_id",
                                 className: "facebook_id"
                             
                             },
                             {
                                 "mData":"instragram_id",
                                 className:"instragram_id"
                             
                             },
                          
                          /*,
                            {
                                "mData":"photo",
                                className:"photo"
                            
                            },
                          {
                               "mData": "aadhar_card",
                               className: "aadhar_card"
                           },
                           {
                               "mData": "pan_card",
                               className: "pan_card"
                           }*/
                         
                          {
                              "mData": "created_by",
                              className: "created_by"
                          },
                          {
                              "mData": "created_date",
                              className: "created_date"
                          
                          }
                               ]
                     
                 });
               
                 
                 $('.buttons-copy, .buttons-csv, .buttons-print, .buttons-pdf, .buttons-excel').addClass('btn btn-primary mr-1');
                $(document).ready(function() {	             		
	         		    $(".userid").hide();
	         			
	         	       			
	         		});
                 
    		},
     error: function () {
     }
 });
})	
