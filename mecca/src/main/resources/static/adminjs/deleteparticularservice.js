var servicetypeId= "";
$(".table").on('click', '.getparticularserviceid', function() {
	var currentRow = $(this).closest("tr");
	servicetypeId = currentRow.find("td:eq(0)").html();	
	servicetypename = currentRow.find("td:eq(1)").html();
	serviceId = currentRow.find("td:eq(2)").html();
	var response = " Deleted";
	var ERROR_MSG = " Deleted";
	if ((response == ERROR_MSG)) {
		swal({
			title : "Are you sure?",
			text : "If Yes Amenities Details Will Be Deleted Permentenly",
			type : "warning",
			showCancelButton : !0,
			confirmButtonColor : "#DD6B55",
			confirmButtonText : "Yes, delete it!",
			closeOnConfirm : !1
		}, function() {
			$.ajax({
				url : 'rest/meccaproject/deleteservice',
				type : 'POST',
				data : jQuery.param({
					serviceId : servicetypeId,

				}),
				dataType : "text",
				success : function(response) {
					var ERROR_MSG = "Deleted Error";
					if ((response == ERROR_MSG)) {
						swal({
							title : "Deleted Error",
							type : 'error'
						}, function() {
							//window.location = "BuildingList.html"
							location.reload();
						});
						$('.loader').hide()
					} else {
						swal({
							title : "Deleted Successfully",
							type : 'success'
						}, function() {
							//window.location = "BuildingList.html"
							location.reload();
						});
						$('.loader').hide()
					}
				},
				error : function() {
					window.location = "BuildingList.html"
				}
			})
		})
	}
})
