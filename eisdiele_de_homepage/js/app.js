$(document).ready(function() {

  /*Animiertes Scrollen*/
  $('#myMenu a').click( function () {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
    && location.hostname == this.hostname) {
        var $target = $(this.hash);
        $target = $target.length && $target || $('[name=' + this.hash.slice(1) +']');
        if ($target.length) {
            var targetOffset = $target.offset().top;
            $('html,body').animate({scrollTop: targetOffset}, 700);
            return false;
        }
    }
  });
  //Nav closes when link is clicked
  $('.navbar-nav>li>a').on('click', function(){
      $('.navbar-collapse').collapse('hide');
  });
});
