$(function () {

  $('.open_menu').on('click', function () {
    $('.hide_menu').toggleClass('hide_menu_active');
    $('body').toggleClass('overflow');
  });


  $(document).ready(function () {
    $(".menu-nav").on("click", "a", function (event) {
      event.preventDefault();
      var id = $(this).attr('href'),
        top = $(id).offset().top;
      $('.hide_menu').toggleClass('hide_menu_active');
      $('body').toggleClass('overflow');
      $('body,html').animate({
        scrollTop: top
      }, 1000);
    });
  });


  var totop = $('#toTop');
  console.log(totop)

  $(totop).on('click', function () {
    console.log(totop)
    $('body,html').animate({
      scrollTop: 0
    }, 1000);
    })

});