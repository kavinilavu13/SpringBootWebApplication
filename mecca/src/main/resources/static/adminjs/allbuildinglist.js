jQuery(document).ready(function() {	
	var role=sessionStorage.getItem("role");
	var email_id=sessionStorage.getItem("EKNAAVPIPNAIYLYAAVIUvED");
	var name=sessionStorage.getItem("NKNAAVPIPNAIYLYAAVIUvE");
	 $.ajax({
         url: 'rest/meccaproject/getbuildinglist',
         type: 'POST',
         data: jQuery.param({        	 
        	 role:role,
         	email_id:email_id,
         	name:name
         }) ,
         dataType: "text",
         success: function (response) {
        var dataSet = JSON.parse(response);
     //  alert(dataSet);
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
                              	   columns: [0,1,2,3,4,7,8,9,10,11,12]
                                 }
                             },
                             {
                                 extend: 'csv',
                                 exportOptions: {
                              	   columns: [0,1,2,3,4,7,8,9,10,11,12]
                                 }
                             },
                             {
                                 extend: 'excel',
                                 exportOptions: {
                              	   columns: [0,1,2,3,4,7,8,9,10,11,12]
                                 }
                             },
                             {
                                 extend: 'pdf',
                                 exportOptions: {
                                	 columns:[0,1,2,3,4,7,8,9,10,11,12]
                                 }
                             },
                             {
                                 extend: 'print',
                                 exportOptions: {
                                	 columns:[0,1,2,3,4,7,8,9,10,11,12]
                                 }
                             }],
                 
                        
                         "aaData": dataSet,
                         "aoColumns": [
                        	  {
                                  "mData":"building_name",
                                  className:"building_name"
                              
                              },
                            {
                                 "mData": "email_id",
                                 className: "email_id"
                             },
                             {
                                 "mData": "mobile_number",
                                 className: "mobile_number"
                             },
                             {
                                 "mData": "db_owner_id",
                                 className: "db_owner_id"
                             },
                            
                             {
                                 "mData": "progress_data",
                                 render: function (dataSet, type, row) {
                                     if (dataSet=="Active") {
                                         return '<td style="text-color:green;">'+dataSet+'</td>';
                                     }
                                     else
                                    	 {
                                    	 return '<td style="text-color:red;">'+dataSet+'</td>';
                                    	 }
                                     return dataSet;
                                 },
                                 className: "progress_data"
                             
                             }
                             
                             ,
                             {
                                 "mData": "view",                                 
                                 render: function (dataSet, type, row) {
                                	 if(role=="Building Owner")
                                		 
                            		 {
                                     if (dataSet) {
                                         return '<td> <a href="BuildingOwner_BuildingDetails.html?temp='+dataSet+'"><i class="la la-edit"></i></a></td>';
                                     }
                                     return dataSet;
                            		 }
                                	 else
                                		 {
                                		 if (dataSet) {
                                             return '<td> <a href="BuildingDetails.html?temp='+dataSet+'"><i class="la la-edit"></i></a></td>';
                                         }
                                         return dataSet;
                                		 }
                                 },
                         	   className: "view"
                             },
                             
                             {
                                 "mData": "delete",                                 
                                 render: function (dataSet, type, row) {
                                     if (dataSet) {
                                         return '<td> <a href="#" class="getparticularbuildinglist"><i class="la la-trash" style="color:red;"></i></a></td>';
                                     }
                                     return dataSet;
                                 },
                         	   className: "delete"
                             },
                             {
                                 "mData": "id",
                                 className: "id"
                             
                             },
                             {
                                 "mData": "no_of_floor",
                                 className: "no_of_floor"
                             
                             },
                             {
                                 "mData": "doe",
                                 className: "doe"
                             
                             },
                             {
                                 "mData": "description",
                                 className: "description"
                             },
                             {
                                 "mData": "street_address",
                                 className: "street_address"
                             },
                             
                             {
                                 "mData": "area",
                                 className: "area"
                             }
                            ,
                             {
                                 "mData": "city",
                                 className: "city"
                             },
                             
                             {
                                 "mData": "zip_code",
                                 className: "zip_code"
                             },
                             {
                                 "mData": "country",
                                 className: "country"
                             }
                                 ]
                     
                 });
               
                 
                 $('.buttons-copy, .buttons-csv, .buttons-print, .buttons-pdf, .buttons-excel').addClass('btn btn-primary mr-1');
               $(document).ready(function() {	             		
	         		    $(".id").hide();	
	         		});
    		},
     error: function () {
     }
 });
})	
