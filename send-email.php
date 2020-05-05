<?php 

	$name = $_POST['email'];
	$message = $_POST ['message'];

	$email_from = 'EasyTutorials@avinashkr.com';
	
	$email_subject = "Nová Správa"
	
	$email_body = "User email: $email.\n".
						"User Message: $message.\n";


	$to = "ilovsky.ilovsky@gmail.com"
	
	$headers = "From: $email_from \r\n".
	
	$headers .= "Reply-To: $name \r\n";


	mail($to,$email_subject,$email_body,$headers);

	header("Location: index.html");

?>