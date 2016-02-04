<?php
$name = $_POST['name'];
$company = $_POST['company'];
$email = $_POST['email'];
$message = $_POST['message'];
$phone = $_POST['phone'];
$email_to = 'info@alianzamx.com, acesar@alianzamx.com, cvillareal@alianzamx.com, jaimesalvador.simental@gmail.com';
$mail_send = mail($email_to,'Alianza Web Site Contact', "Name: $name\r\nCompany: $company\r\nPhone: $phone\r\nEmail: $email\r\nMessage: $message");

if($mail_send){
	header("Location: /send_mail/correcto.html");
	exit;
}else{
	header("Location: /send_mail/error.html");
 	exit;
}



?>