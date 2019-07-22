<?php
    include("public.php");

    $subject = $_POST["subject"];
    $answer = $_POST["answer"];

    $sql = "insert into itemB (bname,banswer) values (' $subject', '$answer')";
    $res = mysqli_query($con,$sql);

    if($res){
        echo json_encode(array(
            "status"=>true,
            "info"=>"添加成功"
        ));
    }else{
        echo json_encode(array(
            "status"=>false,
            "info"=>"添加失败"
        ));
    }
?>