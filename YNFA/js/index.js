$(".header-menu").on("click","a", function (event) {
	event.preventDefault();
	var id  = $(this).attr('href'),
	top = $(id).offset().top;
	$('body,html').animate({scrollTop: top}, 1000);
});

$('#toggleMenu').click(function() {
	$('.header-menu').toggleClass('responsive');
});

var features = new Swiper('.swiper-container', {
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
  	},
	pagination: {
		el: '.swiper-pagination',
		clickable: true
 	}
});

var names = ['Interview: Dejan Lovren', 'Interview: Roberto Firmino', 'Interview: Mohamed Salah'];

var players = new Swiper('.player-item', {
	slidesPerView: 1,
	pagination: {
			el: '.player-list',
			clickable: true,
			renderBullet: function (index, className) {
				return '<div class="' + className + '">' + (names[index]) +
				'</div>';
			},
		}
});

//Click Logo To Scroll To Top
$('.lfc-footer .logo').on('click', () => {
	$('html,body').animate({
		scrollTop: 0
	},700);
});
