jQuery(document).ready(function() {
	
	$.ajax({
		url : 'rest/meccaproject/getAmenities',
		type : 'POST',
		data : jQuery.param({

		
		}),
		dataType : "text",
		success : function(response) {
		//	alert(response);
			if(response=="[]" || response==null||response=="" ||response==undefined  )
				{
				
				$(".Amenities").hide();
				swal({
					  title: "There are no amenities available.Please add",
					 	  type: "info",
					  showCancelButton: false,
					  closeOnConfirm: false,
					  showLoaderOnConfirm: true
					}, function () {
						window.location = "AddAmenities.html"
					});
				}
			else
				{
			 var res = JSON.parse(response);	
		 //console.log(res);
				for(i=0;i<res.length;i++)
					
					{
					console.log(res.length);
					  $("#amenities").append('<div class="col-md-4"><div class="form-group"><label for="companyName"><h6><u>'+res[i].servicetype_name+'</u></h6></label><div class="col-md-12 col-sm-12   skin-square skin amenities-'+res[i].servicetype_id+'"></div></div></div>');
					  $("#groundflooramenities").append('<div class="col-md-4"><div class="form-group"><label for="companyName"><h6><u>'+res[i].servicetype_name+'</u></h6></label><div class="col-md-12 col-sm-12 skin skin-square amenities-groundfloor-'+res[i].servicetype_id+'"></div></div></div>');
					  $("#flooramenities").append('<div class="col-md-4"><div class="form-group"><label for="companyName"><h6><u>'+res[i].servicetype_name+'</u></h6></label><div class="col-md-12 col-sm-12  skin skin-square amenities-floor-'+res[i].servicetype_id+'"></div></div></div>');
					  $("#roomamenities").append('<div class="col-md-4"><div class="form-group"><label for="companyName"><h6><u>'+res[i].servicetype_name+'</u></h6></label><div class="col-md-12 col-sm-12 skin skin-square amenities-floor_room-'+res[i].servicetype_id+'"></div></div></div>');
					  $("#terrace_amenities").append('<div class="col-md-4"><div class="form-group"><label for="companyName"><h6><u>'+res[i].servicetype_name+'</u></h6></label><div class="col-md-12 col-sm-12  skin skin-square amenities-terrace-'+res[i].servicetype_id+'"></div></div></div>');
					  $("#terrace_room_amenities").append('<div class="col-md-4"><div class="form-group"><label for="companyName"><h6><u>'+res[i].servicetype_name+'</u></h6></label><div class="col-md-12 col-sm-12  skin skin-square amenities-terrace_room-'+res[i].servicetype_id+'"></div></div></div>');
					  var service_name = res[i].service_name;
					   service_name = service_name.split(',');	
					   
					   var servicetype_id = res[i].servicetype_id;
					   servicetype_id = servicetype_id.split(',');	
					   
					
					   var service_id = res[i].service_id;
					   service_id = service_id.split(',');	
					   for(j=0;j<service_name.length;j++)
						{
						$(".amenities-"+res[i].servicetype_id).append('<fieldset><input type="checkbox" id=building-amenities-'+res[i].servicetype_id+'-'+service_id[j]+' name="building_amenities" value='+res[i].servicetype_id+'-'+service_id[j]+' ><label >&nbsp; '+service_name[j]+'</label></fieldset>');					
						$(".amenities-groundfloor-"+res[i].servicetype_id).append('<fieldset><input type="checkbox"  id=ground-amenities-'+res[i].servicetype_id+'-'+service_id[j]+' name="amenities-groundfloor"  class="skin skin-square" value='+res[i].servicetype_id+'-'+service_id[j]+' ><label for="input-11">&nbsp; '+service_name[j]+'</label></fieldset>');
						$(".amenities-floor-"+res[i].servicetype_id).append('<fieldset><input type="checkbox" id=floor-amenities-'+res[i].servicetype_id+'-'+service_id[j]+' name="amenities-floor" class="skin skin-square" value='+res[i].servicetype_id+'-'+service_id[j]+' ><label for="input-11">&nbsp; '+service_name[j]+'</label></fieldset>');
						$(".amenities-floor_room-"+res[i].servicetype_id).append('<fieldset><input type="checkbox"  id=room-amenities-'+res[i].servicetype_id+'-'+service_id[j]+' name="amenities-floor_room" class="skin skin-square" value='+res[i].servicetype_id+'-'+service_id[j]+' ><label for="input-11">&nbsp; '+service_name[j]+'</label></fieldset>');
						$(".amenities-terrace-"+res[i].servicetype_id).append('<fieldset><input type="checkbox" id=terrace-amenities-'+res[i].servicetype_id+'-'+service_id[j]+' name="amenities-terrace" class="skin skin-square" value='+res[i].servicetype_id+'-'+service_id[j]+' ><label for="input-11">&nbsp; '+service_name[j]+'</label></fieldset>');
						$(".amenities-terrace_room-"+res[i].servicetype_id).append('<fieldset><input type="checkbox" id=terrace-room-amenities-'+res[i].servicetype_id+'-'+service_id[j]+' name="amenities-terrace-room" class="skin skin-square" value='+res[i].servicetype_id+'-'+service_id[j]+' ><label for="input-11">&nbsp; '+service_name[j]+'</label></fieldset>');
				
						}
					   checkboxs();
						
					}
				        
				        
				        
				        
				        
				        
				        
				        
				        
				        
				        
				        
				        
				        
	/*			        
		 i=0;      
				$.each(res, function(){
				  $.each(this, function(key, val){				  
					  console.log("key:::"+key +","+ "VAL:::"+val);
					  console.log(res);
					  if(res==null || res==undefined||res=="")
						  {
						  console.log("empty**************");
						  }
					  else
						  {
					  $("#amenities").append('<div class="col-md-4"><div class="form-group"><label for="companyName"><h6><u>'+res[i].servicetype_name+'</u></h6></label><div class="col-md-12 col-sm-12   skin-square skin amenities-'+res[i].servicetype_name+'"></div></div></div>');
					  $("#groundflooramenities").append('<div class="col-md-4"><div class="form-group"><label for="companyName"><h6><u>'+res[i].servicetype_name+'</u></h6></label><div class="col-md-12 col-sm-12 skin skin-square amenities-groundfloor-'+res[i].servicetype_name+'"></div></div></div>');
					  $("#flooramenities").append('<div class="col-md-4"><div class="form-group"><label for="companyName"><h6><u>'+res[i].servicetype_name+'</u></h6></label><div class="col-md-12 col-sm-12  skin skin-square amenities-floor-'+res[i].servicetype_name+'"></div></div></div>');
					  $("#roomamenities").append('<div class="col-md-4"><div class="form-group"><label for="companyName"><h6><u>'+res[i].servicetype_name+'</u></h6></label><div class="col-md-12 col-sm-12 skin skin-square amenities-floor_room-'+res[i].servicetype_name+'"></div></div></div>');
					  $("#terrace_amenities").append('<div class="col-md-4"><div class="form-group"><label for="companyName"><h6><u>'+res[i].servicetype_name+'</u></h6></label><div class="col-md-12 col-sm-12  skin skin-square amenities-terrace-'+res[i].servicetype_name+'"></div></div></div>');
					  $("#terrace_room_amenities").append('<div class="col-md-4"><div class="form-group"><label for="companyName"><h6><u>'+res[i].servicetype_name+'</u></h6></label><div class="col-md-12 col-sm-12  skin skin-square amenities-terrace_room-'+res[i].servicetype_name+'"></div></div></div>');
				  }
			
					  var service_name = res[i].service_name;
				     service_name = service_name.split(',');	
				   
				   var servicetype_id = res[i].servicetype_id;
				   servicetype_id = servicetype_id.split(',');	
				   
				
				   var service_id = res[i].service_id;
				   service_id = service_id.split(',');			
					$.each(service_name, function(index, value) {
					console.log(service_name[index]);					
						$(".amenities-"+res[i].servicetype_name).append('<fieldset><input type="checkbox" id="input-11" name="building_amenities" value='+res[i].servicetype_id+'-'+service_id[index]+' ><label >&nbsp; '+service_name[index]+'</label></fieldset>');					
						$(".amenities-groundfloor-"+res[i].servicetype_name).append('<fieldset><input type="checkbox" name="amenities-groundfloor"  class="skin skin-square" value='+res[i].servicetype_id+'-'+service_id[index]+' ><label for="input-11">&nbsp; '+service_name[index]+'</label></fieldset>');
						$(".amenities-floor-"+res[i].servicetype_name).append('<fieldset><input type="checkbox" name="amenities-floor" class="skin skin-square" value='+res[i].servicetype_id+'-'+service_id[index]+' ><label for="input-11">&nbsp; '+service_name[index]+'</label></fieldset>');
						$(".amenities-floor_room-"+res[i].servicetype_name).append('<fieldset><input type="checkbox"  name="amenities-floor_room" class="skin skin-square" value='+res[i].servicetype_id+'-'+service_id[index]+' ><label for="input-11">&nbsp; '+service_name[index]+'</label></fieldset>');
						$(".amenities-terrace-"+res[i].servicetype_name).append('<fieldset><input type="checkbox" name="amenities-terrace" class="skin skin-square" value='+res[i].servicetype_id+'-'+service_id[index]+' ><label for="input-11">&nbsp; '+service_name[index]+'</label></fieldset>');
						$(".amenities-terrace_room-"+res[i].servicetype_name).append('<fieldset><input type="checkbox" name="amenities-terrace-room" class="skin skin-square" value='+res[i].servicetype_id+'-'+service_id[index]+' ><label for="input-11">&nbsp; '+service_name[index]+'</label></fieldset>');
						
										
					});
					 checkboxs();
					
						 i++;
				  });
				 
				 
				});*/
				}
		},
		error : function() {
		}
	});
})
$(document).ready(function(){
	   

});

function  checkboxs (){
	$('.icheck_minimal input').iCheck({
        checkboxClass: 'icheckbox_minimal',
        radioClass: 'iradio_minimal',
    });
   $('.icheckbox_square-blue input').iCheck({
        checkboxClass: 'icheckbox_square-blue',
        radioClass: 'iradio_square-blue'
    });
   $('.skin-square input').iCheck({
       checkboxClass: 'icheckbox_square-blue',
       radioClass: 'iradio_square-blue',
   });
}
$('#Terrace_Type').on('change', function() {

	 var Terrace_Type =$.trim($("#Terrace_Type").val());	
	 if(Terrace_Type=="Terrace with room")
		 {
		 $(".terrace_hide").show();
	
		 }
	 else
		 {
		 $(".terrace_hide").hide();
		
		 }
	});

/*	$(".btn-link").click(function(){

				var id = $(this).attr('id');
				var href = $(this).attr('href');
			     
		              alert(id+"--"+href);
		              
		              
		              $.ajax({
		          		url : 'rest/meccaproject/getservice',
		          		type : 'POST',
		          		data : jQuery.param({

		          			id : id
		          		}),
		          		dataType : "text",
		          		success : function(response) {
		          			alert(response);
		          			 var res = JSON.parse(response);			
		          			var service_type_id = res[0].service_type_id;
		          			var id = res[0].id;
		          			var service = res[0].service;
		          		//	$("#nav-tabContent").empty();
		          			$.each(res, function() {
		          			  $.each(this, function(key, val){
		          			    alert(val);//here data 
		          			      alert (key); //here key
		          			      
		          			
		          			    	
		          				      href="#list-"+val;
		          				      alert(id+"--"+val);
		          				  
		          				  
		          				  
		          			    $("#nav-tabContent").append('<div class="tab-pane fade show active" id='+href+' role="tabpanel" aria-labelledby="list-home-list"><div class="row skin skin-flat "><div class="col-md-6 col-sm-12"><fieldset class="check"><input type="checkbox" id='+val+'><label for="input-15">'+val+'</label></fieldset></div></div></div>'
												
		          			    );
		          			   i++;
		          			  });
		          			});
		          			
		          		},
		        		error : function() {
		        		}
		        	});
		              
		              
		         
		});
*/

