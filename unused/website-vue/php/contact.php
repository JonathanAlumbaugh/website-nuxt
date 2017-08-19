<?php

function Connect()
{
 $dbhost = "localhost";
 $dbuser = "jonatha8_contactform";
 $dbpass = "Russian00-";
 $dbname = "contact";
 
 // Create connection
 $conn = new mysqli($dbhost, $dbuser, $dbpass, $dbname) or die($conn->connect_error);
 
 return $conn;
}

$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];
$formcontent="From: $name \n Message: $message";
$recipient = "jonathan.alumbaugh@gmail.com";
$subject = "SOMEONE VISITED YOUR SITE WOOO";
$mailheader = "From: $email \r\n";
mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");
echo "Thank You!";
?>
