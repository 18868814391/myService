
<?php
header('content-type:text/html;charset=utf-8');
//请求url地址
    $appId = 'wx3352249676449b29';
    $appSecret = '97598b593cca4fb58c631a494c6413c7';
    $url = "https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=".$appId."&secret=".$appSecret;
    $ch = curl_init($url);
    //3.设置参数
    curl_setopt($ch,CURLOPT_RETURNTRANSFER,1);
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);//跳过证书验证
    curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, false);  // 从证书中检查SSL加密算法是否存在
    //4.调用接口
    $res = curl_exec($ch);
    if(curl_errno($ch)){
        var_dump(curl_error($ch));
    }
    $resArr = json_decode($res,1);
    echo urldecode(json_encode($resArr));
    echo "\r\n";
    echo $resArr['access_token'];
    echo "\r\n";
    var_dump($resArr['access_token']);
    echo "\r\n";
    curl_close($ch);


?>