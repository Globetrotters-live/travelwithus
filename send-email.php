<?php 

	if (isset($_POST['submit'])) {
		$name = $_POST['email'];
		$subject = $_POST['subject'];
		$message = $_POST['message'];


		$mailTo = "ilovsky.ilovsky@gmail.com";
		$headers = "From: ".$name;
		$txt = $message;
	


	mail($mailTo, $subject, $txt, $headers);

	header("Location: index.html");

	}

?>