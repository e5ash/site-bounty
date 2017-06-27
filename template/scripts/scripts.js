$(document).ready(function($) {
	$('.gallery__list').slick({
		slidesToShow: 1,
		centerMode: true,
		variableWidth: true,
		prevArrow: '<button type="button" class="slick-prev slick-arrow"><img src="../../upload/icons/arrow-left.svg" alt="" /></button>',
		nextArrow: '<button type="button" class="slick-next slick-arrow"><img src="../../upload/icons/arrow-right.svg" alt="" /></button>',
		appendArrows: $('.gallery__arrows .container'),
		responsive: [{
			breakpoint: 690,
			settings: {
				variableWidth: false,
				centerMode: false
			}
		}]
	});


	var increment = $('.increment');
	increment.keypress(function (e) {
		if (!(e.which>47 && e.which<58)) return false;
	})


	$('.increment__plus').click(function() {
		var parent = $(this).parent('.increment'),
			brother = $(this).siblings('div'),
			input = $(this).siblings('input'),
			inputVal = Number(input.val());

		input.val(inputVal + 1);
	});
	$('.increment__minus').click(function() {
		var parent = $(this).parent('.increment'),
			brother = $(this).siblings('div'),
			input = $(this).siblings('input'),
			inputVal = Number(input.val());

		
		if (inputVal > 15) {
			input.val(inputVal - 1);
		}
	});


	var incrementErrorName = 'increment_error';


	var calc = {
		block: $('.calc'),
		button: $('.calc__button'),
		hidden: $('.result__content'),
		increment: $('.calc__config .increment'),
		text: $('.result__text'),
		content: $('.result__table + p'),
		error: $('.result__error'),
		errorP: $('.result__error p'),
		imt: $('#imt'),
		massa: $('#massa span'),
		count: []

	}
	
	calc.button.click(function() {
		calc.errorP.html('');
		calc.count = [];
		var increment = calc.block.find('.increment'),
			incrementLenght = increment.length,
			fadeSpeed = 300,
			i = 0;
		increment.each(function() {
			var input = $(this).find('input'),
				inputVal = $(this).find('input').val(),
				text = $(this).prev('.text-before').html(),
				name = input.attr('name');

			function inputNameQuery(inputName, minValue, maxValue) {
				if (name == inputName) {

					if (inputVal >= minValue && inputVal <= maxValue){
						i++;
					} else{
						i--;
						calc.errorP.append('<span>"' + text + '"</span>');
					}
				}
			}

			inputNameQuery('age', 15, 99);
			inputNameQuery('growth', 100, 240);
			inputNameQuery('weight', 30, 250);

			if (inputVal == '') {
				$(this).addClass(incrementErrorName);
			} else{
				$(this).removeClass(incrementErrorName);
			}

			calc.count.push(Number(inputVal));

		});
		function fadeInFun() {
			calc.hidden.fadeIn(fadeSpeed);
			
		}
		function fadeOutFun() {
			calc.text.fadeIn(fadeSpeed);
			calc.error.fadeIn(fadeSpeed);
			
		}

		


		var sex = $('.calc__config .radio input:checked'),
			sexValue = sex.val();
		


		var minusSex;
		if (sexValue == 1) {
			minusSex = 110;
		} else{
			minusSex = 100;
		}


		var imt = calc.count[2]/((calc.count[1] * calc.count[1])/10000);
			massa = (calc.count[1] - minusSex) * 1.15;

		calc.imt.html(Number(imt).toFixed(1))
		calc.massa.html(Number(massa).toFixed(1))

		if (imt < 18.5) {
			var text = $('.result-text_1').text()
			calc.content.html(text);
		} else if (imt >= 18.5 && imt <= 24.9){
			var text = $('.result-text_2').text()
			calc.content.html(text);
		} else if (imt >= 25 && imt <= 29.9){
			var text = $('.result-text_3').text()
			calc.content.html(text);
		} else if (imt >= 30 && imt <= 34.9){
			var text = $('.result-text_4').text()
			calc.content.html(text);
		} else if (imt >= 35 && imt <= 39.9){
			var text = $('.result-text_5').text()
			calc.content.html(text);
		} else if (imt >= 40){
			var text = $('.result-text_6').text()
			calc.content.html(text);
		}



		if (i == incrementLenght) {
			setTimeout(fadeInFun, 300);
			calc.text.fadeOut(fadeSpeed);
			calc.error.fadeOut(fadeSpeed);
		} else{
			setTimeout(fadeOutFun, 300);
			calc.hidden.fadeOut(fadeSpeed);
		}
	});
	$('#popup-callback button').click(function() {
		parent.jQuery.fancybox.getInstance().close();
		$.fancybox.open({
			src  : '#popup-successful',
			type : 'inline'
		});
	});
	$('.certificates__all span').click(function() {
		$('.certificate').css('display', 'inline-block');
		$(this).hide();
	});
	$(".header__button").click(function() {
		var elementClick = $(this).attr("href")
		var destination = $(elementClick).offset().top;
		jQuery("html:not(:animated),body:not(:animated)").animate({
		  scrollTop: destination
		}, 800);
		return false;
	 });
	$('.input-phone').mask("+7 (999) 999-99-99",{placeholder:" "})
});



