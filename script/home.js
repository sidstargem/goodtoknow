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
function sendMail(){
var valid=false;
var toemail="ani.or.suresh@gmail.com";
var name=document.getElementById('first-name').value + " "+document.getElementById('last-name').value;
var email = document.getElementById('email').value;
var phone = document.getElementById('phone').value;
var subject=document.getElementById('services').value;
var message=document.getElementById('message').value;
if(name.trim().length>0)
{
if(email.length>0){
	if(subject.length>0)
	{
		if(message.length>0){
		    valid=true;
		}
		else{
			 $('html,body').animate({
                scrollTop: document.getElementById('message').offset().top-150
            }, 1000);
	         }
	}
	else{
 $('html,body').animate({
                scrollTop: document.getElementById('subject').offset().top-150
            }, 1000);
	document.getElementById('subject').focus(); 
     }	
}
else{
 $('html,body').animate({
                scrollTop: document.getElementById('email').offset().top-150
            }, 1000);
	document.getElementById('email').focus(); 
}
}
else{
 $('html,body').animate({
                scrollTop: document.getElementById('first-name').offset().top-150
            }, 1000);

}
if(valid){
var bodymsg=document.getElementById('message').value+"\n\n Contact Name: "+name+"\n Contact Email: "+email+"\n Contact No: "+phone+"\n\n";

    var link = "mailto:" +toemail           
             + "?subject=" + encodeURIComponent("Enquiry about: ") + subject
             + "&body=" + encodeURIComponent(bodymsg)
    ;    
    window.location.href = link;
}

}
