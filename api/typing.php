<?php
header('Content-Type: application/json');
$id = $_GET['channel'];
$ch = curl_init('http://discordapp.com/api/v6/channels/' . $id . '/messages?limit=50');

// Execute
curl_exec($ch);
$answer  = curl_exec($ch);
echo $answer;
?>