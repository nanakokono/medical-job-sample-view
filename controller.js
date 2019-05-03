$(function(){
    const $jobDetailDescriptionTop = $('#job-detail-description').offset().top;
    const $jobDetailFormTop = $('#job-detail-form').offset().top;
    const $jobDetailFixed = $('#job-detail-fixed');
    const $jobDetailFixedButton = $('#job-detail-fixed-button');

    $(window).scroll(function () {
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
    })
});
