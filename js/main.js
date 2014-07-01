$(document).ready(function() {
  $('.btn-search').click(function() {
    $('.search-input').toggleClass("open").find('input').focus();
  });

  $('.close').click(function() {
    $(this).prev('input').val('').parents('.search-input').removeClass('open');
  });
});