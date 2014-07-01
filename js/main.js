(function() {
  $(document).ready(function() {
    $('.btn-search').click(function() {
      return $('.search-input').toggleClass("open").find('input').focus();
    });
    return $('.close').click(function() {
      return $(this).prev('input').val('').parents('.search-input').removeClass('open');
    });
  });

}).call(this);
