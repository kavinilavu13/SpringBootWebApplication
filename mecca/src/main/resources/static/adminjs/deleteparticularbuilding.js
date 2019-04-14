var buildingname = "";
var EmailId = "";
var id="";
$(".table").on('click', '.getparticularbuildinglist', function() {

	var currentRow = $(this).closest("tr");
	buildingname = currentRow.find("td:eq(0)").html();
	EmailId = currentRow.find("td:eq(1)").html();
	id = currentRow.find("td:eq(7)").html();
	//alert(id);
	var response = " Deleted";
	var ERROR_MSG = " Deleted";
	if ((response == ERROR_MSG)) {
		swal({
			title : "Are you sure?",
			text : "If Yes Building Details Will Be Deleted Permanently",
			type : "warning",
			showCancelButton : !0,
			confirmButtonColor : "#DD6B55",
			confirmButtonText : "Yes, delete it!",
			closeOnConfirm : !1
		}, function() {
			$.ajax({
				url : 'rest/meccaproject/deleteparticularbuildingdetails',
				type : 'POST',
				data : jQuery.param({
					email_id : id,

				}),
				dataType : "text",
				success : function(response) {
					var ERROR_MSG = "Not Deleted";
					if ((response == ERROR_MSG)) {
						swal({
							title : "Not Deleted",
							type : 'error'
						}, function() {
							window.location = "BuildingList.html"
						});
						$('.loader').hide()
					} else {
						swal({
							title : "Deleted Successfully",
							type : 'success'
						}, function() {
							window.location = "BuildingList.html"
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
