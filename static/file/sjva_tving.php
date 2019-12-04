<?php
function get_html() {
	$url = func_get_arg(0);
	$headers = func_get_arg(1);
	$query = (func_num_args() == 3) ? func_get_arg(2) : null;
	$ch = curl_init();
	curl_setopt($ch, CURLOPT_URL, $url);
	curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
	curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, FALSE);
	curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
	curl_setopt($ch, CURLOPT_HEADER, 0);
	if ( $query != null) {
		curl_setopt($ch, CURLOPT_POST, 1);
		curl_setopt($ch, CURLOPT_POSTFIELDS, $query);
	}
	$data = curl_exec($ch);
	return $data;
}	

$url = $_POST['url'];
$cookie = $_POST['cookie'];

$headers = array('Cookie: '.$cookie.';');
$data = get_html($url, $headers);
header('Content-type: application/json');
echo $data;
?> 
