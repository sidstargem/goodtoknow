<?php

// getting variables from form

$emailTo = 'ani.or.suresh@gmail.com';
$subject = 'Contact Us';
$name = trim($_REQUEST['name']);
$emailFrom = trim($_REQUEST['email']);
$message = $_REQUEST['message'] + $_REQUEST['phone'];

// prepare email body text

$Body = "You have a message from: ";
$Body .= $name;
$Body .= "\n";
$Body .= "\n";
$Body .= $message;

// send prepared message

$sent = mail($emailTo, $subject, $Body);

//callback for jQuery AJAX

if ($sent){
  echo 'sent';
}
else{ echo 'error';}

print_r($_REQUEST); die();
?>