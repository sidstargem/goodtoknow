$(document).ready(function(){
  $('#nav + button .menu').click(function(){
    $('.header-mininav').show();
    $('.menu').hide();
    $('.close').show();
  });
$('#nav + button .close').click(function(){
    $('.header-mininav').hide();
    $('.menu').show();
    $('.close').hide();
  });

$('a[href*=\\#]').on('click', function() { 
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.substr(1) +']');
        if (target.length) {
            $('html,body').animate({
                scrollTop: target.offset().top-50
            }, 1000);
		if($(".close").is(":visible")) {
			$(".close").click();
		}
            return false;
        }
    });
});
