$(document).ready(function() {
	$('#header').load("common/header.html", function() {
		$('#pageName').html("<h1>" + getPageName() + "</h1>");
		$('#pageIcon').html(getPageIcon());
		
		$("#topMenuSlider").click(function() {
			$(".topMenuItemText").animate({width: "toggle"});
			$("#topMenuSliderIcon").toggle();
			$("#topMenuSliderIconHide").toggle();
		});
	});
});

function getPageName() {
	alert('getPageName');
	return "error";
}

function getPageIcon() {
	alert('getPageIcon');
	return "error";
}