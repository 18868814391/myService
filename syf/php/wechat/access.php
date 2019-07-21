
<?php
$appId = 'wx3352249676449b29';
$appSecret = '97598b593cca4fb58c631a494c6413c7';//虚拟的，不要用
$url = "https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=".$appId."&secret=".$appSecret;
$ch = curl_init();//初始化curl
curl_setopt($ch, CURLOPT_URL,$url); //要访问的地址
curl_setopt($ch,CURLOPT_RETURNTRANSFER,1);
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);//跳过证书验证
curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, false); // 从证书中检查SSL加密算法是否存在
$data = json_decode(curl_exec($ch));
if(curl_errno($ch)){
    var_dump(curl_error($ch)); //若错误打印错误信息
}
var_dump($data); //打印信息

curl_close($ch);//关闭curl
?>