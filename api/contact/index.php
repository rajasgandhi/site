<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: DELETE, HEAD, GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type,X-Amz-Date,X-Amz-Security-Token,Authorization,X-Api-Key,X-Requested-With,Accept,Access-Control-Allow-Methods,Access-Control-Allow-Origin,Access-Control-Allow-Headers');
header('X-Requested-With: *');

$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);

$errors = array();
if ($_SERVER['REQUEST_METHOD'] === "POST") {
  if (empty($_POST['email'])) {
    $errors[] = 'Email is empty';
  } else {
    $email = $_POST['email'];
    // validating the email
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $errors[] = 'Invalid email';
    }
  }
  if (empty($_POST['message'])) {
    $errors[] = 'Message is empty';
  } else {
    $message = $_POST['message'];
  } 
  if (empty($_POST['name'])) {
    $errors[] = 'Message is empty';
  } else {
    $name = $_POST['name'];
  }
  if (empty($errors)) {
    $date = date('j, F Y h:i A');
    
    $emailBody = "
    <html>
    <head>
    <title>$name is contacting you</title>
    </head>
    <body style=\"background-color:#fafafa;\">
    <div style=\"padding:20px;\">
    Name: <div style=\"color:#888\">$name</div>
    <br>
    Date: <span style=\"color:#888\">$date</span>
    <br>
    Email: <span style=\"color:#888\">$email</span>
    <br>
    Message: <div style=\"color:#888\">$message</div>
    </div>
    </body>
    </html>
    ";
    
    $headers = 	'From: Contact Form <contact@mydomain.com>' . "\r\n" .
    "Reply-To: $email" . "\r\n" .
    "MIME-Version: 1.0\r\n" . 
    "Content-Type: text/html; charset=iso-8859-1\r\n";

    $to = 'rajasmgandhi@gmail.com';
    $subject = 'Contact form filled out';
    
    if (mail($to, $subject, $emailBody, $headers)) {
      $sent = true;	
    }
  }
}
?>

  <?php if (!empty($errors)) : ?> 

            {
  "status": "fail",
  "error":  <?php echo json_encode($errors) ?>
}
  <?php endif; ?>
  
  
  <?php if (isset($sent) && $sent === true) : ?> 

{
  "status": "success",
  "message": "Your data was successfully submitted"
}
  <?php endif; ?>