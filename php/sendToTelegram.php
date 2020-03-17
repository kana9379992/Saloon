<?php

/* https://api.telegram.org/bot1050682262:AAGyv7TUoWI32dNHAKuGBgHdgre8fFQ870U/getUpdates,
где, XXXXXXXXXXXXXXXXXXXXXXX - токен вашего бота, полученный ранее */

$name = $_POST['user_name'];
$phone = $_POST['user_phone'];
$address = $_POST['user_address'];
$date = $_POST['user_date'];
$time = $_POST['user_time'];
$token = "1050682262:AAGyv7TUoWI32dNHAKuGBgHdgre8fFQ870U";
$chat_id = "-495886959";
$arr = array(
  'Имя пользователя: ' => $name,
  'Телефон: ' => $phone,
  'По адресу' => $email,
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

if ($sendToTelegram) {
  alert("Ваша заявка принята");
} else {
  echo "Error";
}
?>