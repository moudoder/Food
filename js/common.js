$(document).ready(function () {


  let counter_wheel = 0;
  let counter_btn = 0;
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }



  $('.wheel-btn').on('click', function() {
    let randum_number = getRandomInt(101);
    let win = '';
    //alert(randum_number);
    
    if (randum_number == 1) {
      $('.wheel-main__rotate').addClass('win-nabor');
       win = 'Набор бесплатно!';
    }
    if (randum_number == 2 || randum_number == 3) {
      $('.wheel-main__rotate').addClass('win-ser-50');
      win = '“сертификат на 50 рублей на любой набор продуктов из основного меню”';
    }
    if (randum_number > 3 && randum_number < 14) {
      $('.wheel-main__rotate').addClass('win-ser-20');
      win = '“сертификат на 20 рублей на любой набор продуктов из основного меню”';
    }
    if (randum_number >= 14 && randum_number < 65) {
      $('.wheel-main__rotate').addClass('win-ser-10');
      win = '“сертификат на 10 рублей на любой набор продуктов из основного меню”';
    }
    if (randum_number >= 65 && randum_number < 76) {
      $('.wheel-main__rotate').addClass('win-bludo');
      win = '+ Блюдо к набору бесплатно!';
    }
    if (randum_number >= 76 && randum_number < 86) {
      $('.wheel-main__rotate').addClass('win-skidka');
      win = 'Скидка 10% на любой набор!';
    }
    if (randum_number >= 86 && randum_number < 96) {
      $('.wheel-main__rotate').addClass('win-desert');
      win = '+ Десерт бесплатно!';
    }
    if (randum_number >= 96 && randum_number <= 100) {
      $('.wheel-main__rotate').addClass('win-recept');
      win = '5 рецептов итальянской пасты!';
    }

      $('.wheel-main__rotate').on('transitionend', function() {
        if (counter_btn == 0) {
          $('.wheel-first').removeClass('wheel-active');
          $('.wheel-thanks').addClass('wheel-active');
          $('.wheel-thanks__text').text(win);
          counter_btn = 1;
        }
      })
    
    return false;
  })

  


  $('.wheel-start-img').on('click', function() {
    $('.wheel-start--abc').addClass('hidde');
    $('.modal-dark').addClass('modal-dark-active');
    $('.wheel-first').addClass('wheel-active');
    return false;
  })

  $('.wheel-start__close').on('click', function() {
    $('.wheel-start--abc').addClass('hidde');
    return false;
  })
  $('.modal-dark').on('click', function() {
    $('.modal-dark').removeClass('modal-dark-active');
    $('.wheel').removeClass('wheel-active');
    return false;
  })

  $('.wheel-close').on('click', function() {
    $('.modal-dark').removeClass('modal-dark-active');
    $('.wheel').removeClass('wheel-active');
    return false;
  })

  $('.wheel-thanks-form__btn').on('click', function() {
    $('.wheel-thanks').removeClass('wheel-active');
    $('.modal-thank').addClass('wheel-active');
  })

  $('.reviews-slider').slick({
	  infinite: true,  
	  slidesToShow: 4,
	  slidesToScroll: 1,
	  dots: true,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          variableWidth: true,
        }
      },
    ]
   });

  


  $('.work-row').slick({
    infinite: false,  
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    dots: true,
    adaptiveHeight: true,
    mobileFirst: true,
    responsive: [
      {
         breakpoint: 1000,
         settings: "unslick"
      }
    ]
    //variableWidth: true,
   });


  if ($(window).width() > 1000) {
     $('.work-text').unwrap();
     $('.work-row img').remove();
  }

  $('.questions-block').on('click', function() {
  	$(this).toggleClass('questions-block-active');
  })

  $('.btn-modal').on('click', function() {
  	$('.modal-dark').addClass('modal-dark-active');
  	$('.modal-form').addClass('modal-form-active');
  	return false;
  })
  $('.modal-dark, .modal-form__close').on('click', function() {
  	$('.modal-dark').removeClass('modal-dark-active');
  	$('.modal-form').removeClass('modal-form-active');
  	return false;
  })

  $('.nav-menu').on('click', function() {
  	$('.modal-menu').addClass('modal-menu-active');
  	return false;
  })
  $('.modal-menu__close').on('click', function() {
  	$('.modal-menu').removeClass('modal-menu-active');
  	return false;
  })

  $(".modal-menu-list li").on("click", 'a', function (event) {
    $('.modal-menu').removeClass('modal-menu-active');
    event.preventDefault();
    let id  = $(this).attr('href'),
    top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 800);
  });

  jQuery(function($){
  	$(document).mouseup( function(e){ // событие клика по веб-документу
  		var div = $( "#modal-menu" ); // тут указываем ID элемента
  		if ( !div.is(e.target) // если клик был не по нашему блоку
  		    && div.has(e.target).length === 0 ) { // и не по его дочерним элементам
  			$('.modal-menu').removeClass('modal-menu-active');
  		}
  	});
  });

  $(".phone").inputmask("+375-(99)-999-99-99");
})