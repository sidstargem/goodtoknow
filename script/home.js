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

$("#submit").on('click', function() {   
    var phone = jQuery("#phone").val(); 
    var name = jQuery("#first-name").val(); 
    var mail = jQuery("#email").val();  
    var message = jQuery("#message").val(); 
    alert(phone); 
    alert(name); 
    alert(mail); 
    alert(message); 

    jQuery.post("https://thegoodtoknow.co.uk/sendmail.php",
    {name: name, mail: mail , message: message}, 
    function(data){
        jQuery("#email").html("<div id='sent'><p>Thank you for the message.</p><p>We will reply as soon as possible.</p></div>");
        alert('sent');
    });      

return false;       
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
