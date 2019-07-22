<?php
    include("public.php");

    $bid = $_POST["bid"];
    $bname = $_POST["bname"];
    $banswer = $_POST["banswer"];


    $sql = "update itemB set bname='$bname',banswer='$banswer' where bid=$bid";
    $res = mysqli_query($con,$sql);

    if($res){
        echo json_encode(array(
            "status"=>true,
            "info"=>"修改成功"
        ));
    }else{
        echo json_encode(array(
            "status"=>false,
            "info"=>"修改失败"
        ));
    }
?>