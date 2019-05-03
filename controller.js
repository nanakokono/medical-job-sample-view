$(function(){
  const FORM_PADDING = 40;
  const SP_BREAK_POINT = 800;
  const $isPC = $(window).width() > SP_BREAK_POINT;

  $(window).scroll(function () {
    const $jobDetailDescriptionTop = $('#job-detail-description').offset().top;
    const $jobDetailFormTop = $('#job-detail-form').offset().top - FORM_PADDING;
    const $jobDetailFixed = $('#job-detail-fixed');
    const $jobDetailFixedButton = $('#job-detail-fixed-button');

    if($isPC) {
      if($(window).scrollTop() > $jobDetailDescriptionTop) {
        $jobDetailFixed.fadeIn();
      }

      if($(window).scrollTop() < $jobDetailDescriptionTop) {
        $jobDetailFixed.fadeOut();
      }

      if($(window).scrollTop() >= $jobDetailFormTop) {
        $jobDetailFixedButton.addClass('disabled');
        $jobDetailFixedButton.attr('href', 'javascript: void(0)')
      }

      if($(window).scrollTop() < $jobDetailFormTop) {
        $jobDetailFixedButton.removeClass('disabled');
        $jobDetailFixedButton.attr('href', '#job-detail-form')
      }
    } else {
      const $jobDetailFixedButtonSp = $('#job-detail-fixed-button-sp');
      if($(window).scrollTop() >= $jobDetailFormTop) {
        $jobDetailFixedButtonSp.fadeOut();
      }

      if($(window).scrollTop() < $jobDetailFormTop) {
        $jobDetailFixedButtonSp.fadeIn();
      }
    }
  })
});
