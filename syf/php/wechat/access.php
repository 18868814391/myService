
<?php
$url = "https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=wx3352249676449b29&secret=97598b593cca4fb58c631a494c6413c7";
$result = https_request($url);
apilog('wechat', 'get_access_token', $url, '', $result);
return $result;
?>