var navMenu = $('.navigation__menu');
var nav = $('.navigation__nav');
var navList = $('.nav__list');
var isClick = "unclick";
var navLogo = $('.navigation__logo');
var header = $('.header');


navMenu.on('click', function(event) {
    if (isClick === "unclick") {
    	isClick = "click";
    	nav.css({"display": "block"});
    	header.addClass('click');
    } else {
    	isClick = "unclick";
    	nav.css({"display": "none"});
    	header.removeClass('click');
    }

    return isClick;

});
