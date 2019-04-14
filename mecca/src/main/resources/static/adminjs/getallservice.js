jQuery(document).ready(function() {		
	 $.ajax({
         url: 'rest/meccaproject/getservicelist',
         type: 'POST',
         data: jQuery.param({}) ,
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
                              	   columns: [1,3]
                                 }
                             },
                             {
                                 extend: 'csv',
                                 exportOptions: {
                              	   columns: [1,3]
                                 }
                             },
                             {
                                 extend: 'excel',
                                 exportOptions: {
                              	   columns: [1,3]
                                 }
                             },
                             {
                                 extend: 'pdf',
                                 exportOptions: {
                                	 columns:[1,3]
                                 }
                             },
                             {
                                 extend: 'print',
                                 exportOptions: {
                                	 columns:[1,3]
                                 }
                             }],                       
                         "aaData": dataSet,
                         "aoColumns": [
                        	  /*{
                                  "mData": "SNo",
                                  className: "SNo"
                              },*/
                             {
                             "mData": "servicetype_id",
                             className: "servicetype_id"
                         },
                        	  {
                                  "mData":"servicetype_name",
                                  className:"servicetype_name"
                              
                              },
                            {
                                 "mData": "service_id",
                                 className: "service_id"
                             },
                             {
                                 "mData": "service_name",
                                 className: "service_name"
                             },
                             {
                                 "mData": "view",                                 
                                 render: function (dataSet, type, row) {
                                     if (dataSet) {
                                         return '<td> <a href="EditAmenities.html?amenities='+dataSet+'"><i class="la la-edit"></i></a></td>';
                                     }
                                     return dataSet;
                                 },
                         	   className: "view"
                             },
                             
                             {
                                 "mData": "delete",                                 
                                 render: function (dataSet, type, row) {
                                     if (dataSet) {
                                         return '<td> <a href="#" class="getparticularserviceid"><i class="la la-trash" style="color:red;"></i></a></td>';
                                     }
                                     return dataSet;
                                 },
                         	   className: "delete"
                             }
                                 ]
                     
                 });
               
                 
                 $('.buttons-copy, .buttons-csv, .buttons-print, .buttons-pdf, .buttons-excel').addClass('btn btn-primary mr-1');
           $(document).ready(function() {	             		
	         		    $(".service_id").hide();
	         			$(".servicetype_id").hide();	 
	         	       			
	         		});
    		},
     error: function () {
     }
 });
});	
