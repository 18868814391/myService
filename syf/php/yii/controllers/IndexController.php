<?php
    namespace app\controllers;
    use yii\web\Controller;

    use app\models\Blog;//数据模型

    class IndexController extends Controller
    {
        public function actionIndex(){
            //echo "index/index";
            $model=new Blog;
            $data=$model->find()->one();

            return $this->render("index",array("row"=>$data));
        }
    }
