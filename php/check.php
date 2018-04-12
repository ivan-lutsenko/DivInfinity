<?php
	require_once 'lib/SMTP.php';
	require_once 'lib/PHPMailer.php';

	header ("Content-Type: text/html; charset=utf-8");
	$name = $_POST["name"];
	$email = $_POST["email"];
	$tel = $_POST["tel"];
	
	if (!empty($name)&&
		!empty($email)&&
		!empty($tel))
	{
		$mail = new PHPMailer;
		$mail->Сharset = 'UTF-8';
		$mail->isSMTP(); 
		$mail->Host = 'smtp.mail.ru'; 
		$mail->SMTPAuth = true;
		$mail->SMTPSecure = 'ssl';
		$mail->Port = 465;
		$mail->Username = 'boss.ivan55@mail.ru';
		$mail->Password = 'detale55';

		$mail->isHTML(true);
		$mail->SetFrom('boss.ivan55@mail.ru', 'DivInfinity System');
		$mail->AddAddress('boss.ivan5512@gmail.com');
		$mail->Subject = 'New Message';

		$body = file_get_contents('email/primer-inliner.html');
		$body = str_replace('{%name%}', $name, $body);
		$body = str_replace('{%mail%}', $email, $body);
		$body = str_replace('{%tel%}', $tel, $body);

		$mail->Body = $body;
		
		$flag = false;
		if($mail->Send())
			$flag = true;
	 	else
	 		$flag = false;

	 	$mail->clearAddresses();
	 	$mail->clearAttachments();

		$json_data = array ('flag'=>$flag);
		echo json_encode($json_data);
	}
	else
	{
		$json_data = array ('flag'=>false);
		echo json_encode($json_data);
	}
?>