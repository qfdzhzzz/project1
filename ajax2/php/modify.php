<?php
    include("public.php");
 
    $id = $_GET["id"];

    $sql = "select * from itemB where bid=$id";

    $res = mysqli_query($con,$sql);

    $arr = mysqli_fetch_assoc($res);

    if(count($arr)){
        echo json_encode(array(
            "status"=>true,
            "data"=>$arr
        ));
    }else{
        echo json_encode(array(
            "status"=>false,
            "info"=>"修改有误"
        ));
    }
?>