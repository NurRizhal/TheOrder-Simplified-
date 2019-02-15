$(document).ready(function(){
	// awal Show
	$("button#show").click(function(){
		$("h3").fadeIn(600);
		$("h3").css("margin", "0");
		$("h4").slideDown(1000);
	});
	// akhir Show
	// awal Hide
	$("button#hide").click(function(){
		$("h4").slideUp(600);
		$("h3").fadeOut(1000);
	});
	// akhir Hide
});