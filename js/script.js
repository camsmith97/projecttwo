$(document).ready(function() {

	$("#valeskatitleone").mouseenter(function() {
		$("#valeskatitleone").css("color","grey");
	});


	$("#valeskatitleone").click(function() {
  		window.location="article.html";
	});

	$("#eliatitle").click(function() {
		window.location="articleone.html";
	});

	$("#home").mouseenter(function() {
		$("#home").addClass("menuoptionhover").fadeIn("slow");

	});

	$("#home").mouseout(function() {
		$("#home").removeClass("menuoptionhover");

	});

	$("#words").mouseenter(function() {
		$("#words").addClass("menuoptionhover").fadeIn("slow");

	});

	$("#words").mouseout(function() {
		$("#words").removeClass("menuoptionhover");

	});

	$("#news").mouseenter(function() {
		$("#news").addClass("menuoptionhover").fadeIn("fast");
	});

	$("#news").mouseout(function() {
		$("#news").removeClass("menuoptionhover");

	});

	$("#picks").mouseenter(function() {
		$("#picks").addClass("menuoptionhover").fadeIn("fast");
	});

	$("#picks").mouseout(function() {
		$("#picks").removeClass("menuoptionhover");

	});

	$("#inprint").mouseenter(function() {
		$("#inprint").addClass("menuoptionhover").fadeIn("fast");
	});

	$("#inprint").mouseout(function() {
		$("#inprint").removeClass("menuoptionhover");

	});

	$(".hamburger").click(function() {
		$("#valeskaarticleone").toggleClass("valeskaarticleafter");
	});

	$(".rightone").mouseenter(function() {
		$("this").html("hi")
	});

	$(".hamburgercontainer").click(function() {
		window.location="fixed.html";
	});

    $(document).on("mousemove", function(e){
    $("#box-shadow-div").css({
       left: e.pageX -750,
       top:  e.pageY
    });
   });

    $(document).on("mousemove", function(e){
    $("#box-shadow-divs").css({
       left: e.pageX -750,
       top:  e.pageY

      });
   });


});