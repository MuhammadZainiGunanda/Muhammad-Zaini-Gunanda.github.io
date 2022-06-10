<?php
	$name = $_POST['name'];
	$email = $_POST['email'];
	$phone = $_POST['phone'];
	$website = $_POST['website'];
	$message = $_POST['message'];

	if (!empty($email) && !empty($email) ) { // jika email dan pesan tidak kosong
	  if (filter_var($email, FILTER_VALIDATE_EMAIL)) { // jika email yang dimasukkan pengguna valid
		  $receiver = 'muhammadzainigunanda@gmail.com'; // alamat email penerima email
		  $subject = 'From : $name <$email>'; // subjek email, subjek terlihat seperti Dari: muhzainn <muh@gmail.com>
		  //  menggabungkan kontak semua nilai pengguna di dalam variabel tubuh. \n digunakan untuk baris baru
		  $body = 'Name: $name\nEmail: $email\nPhone: $phone\Website: $website\nMessage: $message\n\nRegards, \n$name';
		  $sender = 'From: $email'; // pengirim email
		  if (mail($receiver, $subject, $body, $sender )) { // mail() adalah fungsi php bawaan untuk mengirim email
			  echo 'Your message has been sent';
		  } else {
			  echo 'Sorry, failed to send your message';
		  }
	  } else {
		  echo 'Enter a valid email address';
	  }
	} else {
		echo 'Email and password field is required!';
	}
?>