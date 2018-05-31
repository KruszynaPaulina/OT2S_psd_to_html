/* Hamburger menu */

var navMenu = $('.navigation__menu');
var isClick = "unclick";
var header = $('.header');
var fas = $('.navigation__fas');

navMenu.on('click', function(event) {
    if (isClick === "unclick") {
    	isClick = "click";
    	header.addClass('click');
    	fas.removeClass('fa-bars').addClass('fa-times');
    } else {
    	isClick = "unclick";
    	header.removeClass('click');
    	fas.removeClass('fa-times').addClass('fa-bars');
    }

    return isClick;

});

/* Services animation */

var servicesLink = $('.services__link');
var servicesCells = $('.services__cells');
var servicesCellTwo = $('.services__cell--two');
var servicesCellThree = $('.services__cell--three');
var servicesCellfFour = $('.services__cell--four');

servicesLink.on('mousemove', function(event) {
	setBackgroundImage()
    $(this).parent().parent().siblings().css("background-image", "none");
});

servicesLink.on('mouseleave', function(event) {
	setBackgroundImage();
});

function setBackgroundImage() {
	servicesCellThree.css("background-image", "url(../images/serv_three.jpg)");
	servicesCellTwo.css("background-image", "url(../images/serv_two.jpg)");
	servicesCellfFour.css("background-image", "url(../images/serv_four.jpg)");
};

/* Smooth scrolling */

$('.side__link').click(function() {
    var hash = $(this).attr('href');
    $('html, body').animate({
        scrollTop: $(hash).offset().top
    }, 1500);
    return false;
});

/* Acordion */ 


var kindsLink = $('.kinds__link');
var kindsAcordion = $('.kinds__acordion');
var kindsCell = $('.kinds__cell');
var kindsSubtitle = $('.kinds__subtitle')

kindsLink.click(function(event) {

	event.preventDefault();
	kindsSubtitle.fadeOut();

	var target = $(this);

	var targetKindsCell = target.parent().parent();
	var targetKindsCellSiblings = targetKindsCell.siblings().not(kindsAcordion);
	var	targetAcordion = targetKindsCell.next()

	targetKindsCell.animate({width: '0'}, "fast");
	targetKindsCellSiblings.animate({
        width: '33.33%'
    }, "fast");

	setTimeout(function(){ 
		var targetWidth = targetKindsCell.width();

		if (targetWidth === 0) {
	    	targetKindsCell.css("display", "none");
		    targetAcordion.css({
		      "display": "flex",
		      "width": "0%"
		    });
		    targetAcordion.animate({width: '50%'}, "fast");
		    targetKindsCellSiblings.animate({width: '16.67%'}, "fast");
    	}

	}, 300);
    
});

kindsAcordion.mouseleave(function(event) {

	var target = $(this);

	target.animate({width: '0'}, "fast");
	target.siblings().not(kindsAcordion).animate({width: '33.33%'}, "fast");
	target.prev().css({
		      "display": "flex",
		      "width": "0%"
	});

	setTimeout(function(){ 
		var targetWidth = target.width();

		if (targetWidth === 0) {
	    	kindsCell.css("width", "25%");
	    	kindsAcordion.css("display", "none");
    	}

	kindsSubtitle.fadeIn();

	}, 300);

});