$(document).ready(function($) {
	$('.gallery__list').slick({
		slidesToShow: 1,
		centerMode: true,
		variableWidth: true,
		prevArrow: '<button type="button" class="slick-prev slick-arrow"><img src="../../upload/icons/arrow-left.svg" alt="" /></button>',
		nextArrow: '<button type="button" class="slick-next slick-arrow"><img src="../../upload/icons/arrow-right.svg" alt="" /></button>',
		appendArrows: $('.gallery__arrows .container')
	});


	var increment = $('.increment');
	increment.keypress(function (e) {
		if (!(e.which>47 && e.which<58)) return false;
	})
	// increment.each(function () {
	// 	var incrementPlus = $(this).find('.increment__plus'),
	// 		incrementMinus = $(this).find('.increment__minus');
	// })



	var incrementErrorName = 'increment_error';


	var calc = {
		block: $('.calc'),
		button: $('.calc__button'),
		increment: $('.calc__config .increment'),
		sex: $('.calc__config .radio input'),
		text: $('.result__text'),
		content: $('.result__table + p'),
		error: $('.result__error'),
		errorP: $('.result__error p'),
		imt: $('#imt'),
		massa: $('#massa'),

	}

	calc.button.click(function() {
		calc.errorP.html('');
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

			


		});

		if (i == incrementLenght) {
			calc.error.fadeOut(fadeSpeed);
		} else{
			calc.error.fadeIn(fadeSpeed);
		}
	});
});



