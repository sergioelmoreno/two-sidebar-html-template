<?php
	$errorMSG = "";
	// NAME
	if (empty($_POST["name"])) {
	    $errorMSG = "Name is required";
	} else {
	    $name = $_POST["name"];
	}
	// EMAIL
	if (empty($_POST["email"])) {
	    $errorMSG .= "Email is required ";
	} else {
	    $email = $_POST["email"];
	}
 
// callback
if ( $errorMSG == ""){
   echo "success";
}else{
    if($errorMSG == ""){
        echo "Something went wrong :(";
    } else {
        echo $errorMSG;
    }
}
 
?>