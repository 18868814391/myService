<?php

header('content-type:text/html;charset=utf-8');
$connect =new mysqli("localhost", "root", "syf","syf");
if(!$connect){
    die('数据库连接失败'.mysqli_error());
}else{

}

mysqli_query($connect,'SET NAMES UTF8');

$command =  isset($GLOBALS['HTTP_RAW_POST_DATA']) ? $GLOBALS['HTTP_RAW_POST_DATA'] : file_get_contents("php://input");
$j =json_decode( $command,true);
$title=$j['title'];
$content=$j['content'];

$search=mysqli_query($connect,"select * from blog where title='$title'");

if(mysqli_fetch_array($search)){
    $arr = array (
        'errcode'=>99,
        'errmsg'=>urlencode('存在重名文档')
    );
    echo urldecode(json_encode($arr));
    die();
}else{

};

$title=$j['title'];
$content=$j['content'];
$updataTime=$j['updataTime'];
$state=$j['state'];
$content=addslashes($content);

$flag=mysqli_query($connect,"INSERT INTO blog (title,content,updataTime,state) VALUES ('$title','$content', '$updataTime','$state')");
    $arr = array (
        'errcode'=>0,
        'errmsg'=>urlencode('创建成功'),
        'data'=>array(
            'title'=>$title,
            'content'=>$content
        )
    );
    echo urldecode(json_encode($arr));

?>