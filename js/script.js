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