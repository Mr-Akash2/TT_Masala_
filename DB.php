<?php



  $db = new mysqli("Localhost","root","","my_tt_db");



if(isset($_POST['name']) && isset($_POST['number']) && isset($_POST['email']) && isset($_POST['country']) && isset($_POST['Message'])){


  $name = $_POST['name'];
  $number = $_POST['number'];
  $email = $_POST['email'];
  $country = $_POST['country'];
  $Message = $_POST['Message'];

 $is_insert = $db->query("INSERT INTO `data`(`name`, `number`, `email`, `country`, `Message`) VALUES ('$name','$number','$email','$country','$Message')");

if($is_insert = TRUE){
  echo "Thank You, Your Request Submitted";
  exit();
}

}

?>