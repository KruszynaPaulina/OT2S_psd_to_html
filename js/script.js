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
