

<?php
  $recaptcha_secret = "your-recaptcha-secret-key";
  $recaptcha_response = $_POST["g-recaptcha-response"];

  $url = "https://www.google.com/recaptcha/api/siteverify?secret=$recaptcha_secret&response=$recaptcha_response";
  $response = file_get_contents($url);
  $response_data = json_decode($response, true);

  if (!$response_data["success"]) {
    // reCaptcha validation failed, return an error message
  } else {
    // Your email sending code here
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        if(
            !empty($_POST['name'])
            && !empty($_POST['email'])
            && !empty($_POST['subject'])
            && !empty($_POST['message'])
        ){
            $name = $_POST["name"];
            $email = $_POST["email"];
            $subject = $_POST["subject"];
            $message = $_POST["message"];
    
    
            $to = "rxvirat05@gmail.com";
            $subject = "New Contact Form Submission";
            $body = "Name: {$name}\nEmail: {$email}\nSubject: {$subject}\nMessage: {$message}";
            $headers = "From: {$email}";
    
    
            if (mail($to, $subject, $body, $headers)) {
                echo "Message sent successfully!";
            } else {
                echo "Failed to send message.";
            }
        }
    }
  }
?>