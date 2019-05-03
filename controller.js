$(function(){
  const FORM_PADDING = 40;
  const SP_BREAK_POINT = 800;
  const $isPC = $(window).width() > SP_BREAK_POINT;
  const $headerHeight = $('header').height();
  const $jobDetailButton = $('#job-detail-button');
  const $jobDetailFormTop = $('#job-detail-form').offset().top - FORM_PADDING - $headerHeight;
  const $jobDetailFixedButton = $('#job-detail-fixed-button');

  $(window).scroll(function () {

    if($isPC) {
      if($(window).scrollTop() >= $jobDetailFormTop) {
        disableButton();
      }

      if($(window).scrollTop() < $jobDetailFormTop ) {
        activateButton();
      }
    } else {
      if($(window).scrollTop() >= $jobDetailFormTop ) {
        $jobDetailButton.fadeOut();
      }

      if($(window).scrollTop() < $jobDetailFormTop ) {
        $jobDetailButton.fadeIn();
      }
    }
  });

  $jobDetailButton.click(function () {
    scrollToForm();
  });

  $jobDetailFixedButton.click(function () {
    scrollToForm();
  });

  function scrollToForm() {
    $("html,body").animate({scrollTop: $jobDetailFormTop});
  }

  function disableButton() {
    $jobDetailFixedButton.addClass('disabled');
    $jobDetailFixedButton.attr('href', 'javascript: void(0)')
  }

  function activateButton() {
    $jobDetailFixedButton.removeClass('disabled');
    $jobDetailFixedButton.attr('href', '#job-detail-form')
  }
});
