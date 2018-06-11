$(function(){

    /* Counter */

	var dateTop = $('#date').offset().top - window.innerHeight,
	counter = $('.counter');

	$(window).scroll(function() {
		
		if (counter.text() == 0 && $(window).scrollTop() > dateTop) {
			counter.each(function() {
				var $this = $(this),
				countTo = $this.attr('data-count'),
				count = 0,
				interval = setInterval(function(){
					count ++;
					
					if (countTo == 95) {
						$this.text(count + "%");
					} else {
						$this.text(count);
					}
					if ($this.text() == countTo) {
						clearInterval(interval);
					} else if ($this.text() == countTo +"%") { 
						clearInterval(interval);
					}
				}, 100);
			})
		};

	});

});