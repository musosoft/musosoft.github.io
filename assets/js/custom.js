$(document).on("click", ".open-image-modal", function () {
	var dataImage = $(this).data('image');
	$("#modal-image").attr('src', dataImage);
});
