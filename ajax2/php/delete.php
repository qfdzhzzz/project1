<?php
    include("public.php");

    $id = $_GET["id"];

    $sql = "delete from itemB where bid=$id";

    $res = mysqli_query($con,$sql);

    if($res){
        echo json_encode(array(
            "status"=>true,
            "info"=>"删除成功"
        ));
    }else{
        echo json_encode(array(
            "status"=>false,
            "info"=>"删除失败"
        ));
    }

?>