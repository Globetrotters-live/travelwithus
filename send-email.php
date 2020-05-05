<?php 

	if (isset($_POST['submit'])) {

		$mailFrom = $_POST['email'];

		$message = $_POST['message'];

		$mailTo = "ilovsky.ilovsky@gmail.com";

		$headers = "From :".$email;


		mail($mailTo, $message, $headers);

		header("Loaction: index.html")




	}

?>