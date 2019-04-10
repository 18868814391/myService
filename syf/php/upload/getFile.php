<?php
//http://118.31.62.251/syf/php/upload/upload/pptzzxxu.jpg
$relpath=dirname(__FILE__);
$handler = opendir('upload');
$arr1=array();
$arr2=array();
while( ($filename = readdir($handler)) !== false ) {
    if($filename != "." && $filename != ".."){
        array_push($arr1,$filename);
        array_push($arr2,'http://118.31.62.251/syf/php/upload/upload'.'/'.$filename);
    }
}
closedir($handler);
$arr = array (
    'errcode'=>0,
    'errmsg'=>urlencode('成功'),
    'data'=>array(
        'fileName'=>$arr1,
        'fileLocatiom'=>$arr2
    )
);
echo urldecode(json_encode($arr));

?>
