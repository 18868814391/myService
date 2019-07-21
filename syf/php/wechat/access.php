
<?php
public function https_request($url,$type,$res,$arr){
    $ch = curl_init();

    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, FALSE);
    curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, 2);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);

    if($type == 'post'){    //type可以为“get”或“post”
        curl_setopt($ch,CURLOPT_POST,1);
        curl_setopt($ch, CURLOPT_POSTFIELDS, $arr);
    }

    $output = curl_exec($ch);
    curl_close($ch);

    if($res == 'json'){    //res可以是“json”或"xml"
        return json_decode($output,true);
    }
}
public function getAccessToken(){
    if($_SESSION['access_token'] && $_SESSION['expire_time']>time()){
        return $_SESSION['access_token'];
    }
    else{  //appid,appsecret,url分别见上面的图
        $appid = 'wx3352249676449b29';
        $appsecret = '97598b593cca4fb58c631a494c6413c7';
        $url = "https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=".$appid."&secret=".$appsecret;
        $res = $this->https_request($url,'get','json','');    //调用上面的http_request()获取网页数据
        $access_token = $res['access_token'];

        $_SESSION['access_token'] = $access_token;
        $_SESSION['expire_time'] = time()+7200;

        return $access_token;
    }
}
getAccessToken();
?>