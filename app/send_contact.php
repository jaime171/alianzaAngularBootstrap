<?php
$nombre = $_POST['name'];
$company = $_POST['company'];
$correo = $_POST['email'];
$phone = $_POST['phone'];
$message = $_POST['message'];


$mail_send = mail('jaimesalvador.simental@gmail.com','AgendarCita_Doctor_Charles', "Nombre: $nombre\r\nTelefono: $telefono\r\nCorreo: $correo\r\nCita: $cita");

if($mail_send){
	header("Location: /send_mail/correcto.html");
	exit;
}else{
	header("Location: /send_mail/error.html");
 	exit;
}



?>