$(document).ready(function(){
    $('#js-carousel-1').each(function () {

    // Создаем карусель
    var owl = $(this).find('.owl-carousel').owlCarousel({items:1});

    // При клике по кнопке Влево
    $(this).find('.js-prev').on('click', function () {        
      // Перематываем карусель назад
      owl.trigger('prev.owl.carousel');
    });

    // При клике по кнопке Вправо
    $(this).find('.js-next').on('click', function () {
      // Перематываем карусель вперед
      owl.trigger('next.owl.carousel');
    });
    });
  });