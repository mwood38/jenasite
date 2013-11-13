$(document).ready(function() {

  var $resume = $('#resume'),
      $navbar = $('.navbar'),
      resumeDisplayed = false;

  $('.nav').on('click', 'li', function(event) {
    var target = event.target.text;

    $('.active').removeClass('active');
    $(this).addClass('active');
    switch (target) {
      case 'Resume':
        showResume();
        break;
      default:
        hideResume();
    }
  });

  var showResume = function showResume() {
    if (!resumeDisplayed) {
      var height = window.innerHeight * 0.8;
      $resume.animate({top: '0px'}, 800);
      $navbar.animate({top: height}, 800);
      resumeDisplayed = !resumeDisplayed;
    }
  };

  var hideResume = function hideResume() {
    if (resumeDisplayed) {
      $resume.animate({top: '-100%'}, 800);
      $navbar.animate({top: '0px'}, 800);
      resumeDisplayed = !resumeDisplayed;
    }
  };

});

