<?php

// Configure
$from = 'COLMI Enterprise <no-reply@colmi.com>'; // Ensure this domain exists to avoid mail being flagged as spam
$sendTo = 'COLMI Enterprise <colmienterprise@gmail.com>'; // Replace with your actual email
$subject = 'New message from COLMI Enterprise contact form';
$fields = array(
    'name' => 'Name',
    'subject' => 'Subject',
    'email' => 'Email',
    'message' => 'Message'
); // Map field names to email labels
$okMessage = 'Contact form successfully submitted. Thank you, we will get back to you soon!';
$errorMessage = 'There was an error while submitting the form. Please try again later.';

// Process form submission
try {
    if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
        throw new \Exception('Invalid request method.');
    }

    $emailText = "You have a new message from the contact form:\n\n";

    foreach ($fields as $key => $label) {
        if (isset($_POST[$key]) && !empty($_POST[$key])) {
            $value = htmlspecialchars(trim($_POST[$key])); // Sanitize input
            $emailText .= "$label: $value\n";
        } else {
            throw new \Exception("The $label field is required.");
        }
    }

    $headers = array(
        'Content-Type: text/plain; charset="UTF-8";',
        'From: ' . $from,
        'Reply-To: ' . $_POST['email'], // Use the user's email for reply-to
        'Return-Path: ' . $from,
    );

    if (!mail($sendTo, $subject, $emailText, implode("\n", $headers))) {
        throw new \Exception('Could not send the email.');
    }

    $responseArray = array('type' => 'success', 'message' => $okMessage);
} catch (\Exception $e) {
    $responseArray = array('type' => 'danger', 'message' => $errorMessage . ' Error: ' . $e->getMessage());
}

// Return JSON response for AJAX or direct message for normal requests
if (!empty($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest') {
    header('Content-Type: application/json');
    echo json_encode($responseArray);
} else {
    echo $responseArray['message'];
}
?>
