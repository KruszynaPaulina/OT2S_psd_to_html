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

$( window ).resize(function() {
  location.reload(true);
});

if($(window).width() >= 992) {

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

} else {

	var mobIsClick = 'unclick';

	$('.kinds__link, .kinds__btn').click(function(event) {

		event.preventDefault();

		if(mobIsClick === 'unclick') {

			var target = $(this);
			var targetKindsCell = target.parent().parent();
			var targetKindsCellSiblings = targetKindsCell.siblings().not(kindsAcordion);
			var	targetAcordion = targetKindsCell.next()
			var targetKindsCellSiblingsChildren = targetKindsCellSiblings.children()

			targetKindsCellSiblings.animate({height: '0'}, "slow");
			targetKindsCellSiblingsChildren.fadeOut('fast');
			targetAcordion.css({
				"display": "flex",
				"height": "0%"
			});
			targetAcordion.animate({height: '75%'}, "slow");

			mobIsClick = 'click';

		} else {

			event.preventDefault();
			kindsAcordion.animate({height: '0'}, "slow");

			kindsCell.animate({height: '25%'}, "slow").css("display", "flex");
			kindsSubtitle.fadeIn('slow');

			setTimeout(function(){ 

				kindsAcordion.css("display", "none");

			}, 550);

			return mobIsClick = 'unclick';
		}

	});

};


	


