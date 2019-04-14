var name = "";
var id = "";
$(".table").on('click', '.getparticularuserlist', function() {
	var currentRow = $(this).closest("tr");
	name = currentRow.find("td:eq(0)").html();
	id = currentRow.find("td:eq(1)").html();
	number = currentRow.find("td:eq(2)").html();
	var response = " Deleted";
	var ERROR_MSG = " Deleted";
	if ((response == ERROR_MSG)) {
		swal({
			title : "Are you sure?",
			text : "If Yes User Details Will Be Deleted Permanently",
			type : "warning",
			showCancelButton : !0,
			confirmButtonColor : "#DD6B55",
			confirmButtonText : "Yes, delete it!",
			closeOnConfirm : !1
		}, function() {
			$.ajax({
				url : 'profile/'+id,
				type : 'DELETE',
				dataType : "text",
				success : function(response) {
					var ERROR_MSG = "Deleted Error";
					if ((response == ERROR_MSG)) {
						swal({
							title : "Not Deleted",
							type : 'error'
						}, function() {
							window.location = "ViewUser.html"
						});
						$('.loader').hide()
					} else {
						swal({
							title : "Deleted  Successfully",
							type : 'success'
						}, function() {
							window.location = "ViewUser.html"
						});
						$('.loader').hide()
					}
				},
				error : function() {
					window.location = "ViewUser.html"
				}
			})
		})
	}
})
