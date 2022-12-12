<?php
if (!empty($_POST['email']) && !empty($_POST['object']) && !empty($_POST['content'])) {
    $mail = htmlspecialchars($_POST['email']);
    $object = htmlspecialchars($_POST['object']);
    $message = htmlspecialchars($_POST['content']);
    $message = str_replace("\n.", "\n..", $message);
    $msg = wordwrap($message, 70);
    $headers = "From: $mail";
    $mail = mail('virgileesteve@gmail.com', $object, $msg, $headers);
    if ($mail) {
        header("Location: ../index.html#sent");
    } else header('location: ../index.html#error');
} else header('location: ../index.html#error');
