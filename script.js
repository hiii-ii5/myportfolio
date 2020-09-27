$(function() {
  $('.item').hover(
    function() {
      $(this).find('.item-text').addClass('text-active');
    },
    function() {
      $(this).find('.item-text').removeClass('text-active');
    }
  );

  $('.message-show').click(function() {
    $('#contact-modal').fadeIn();
  });

  $('.close-modal').click(function() {
    $('#contact-modal').fadeOut();
  });
});
