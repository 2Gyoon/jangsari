$(document).ready(function(){
    //브라우저가 준비가 완료되면 coverstory.html 문서를 index.html 문서의 section파트에 넣어준다.
    $.ajax({
        url:"./coverstory.html",
        success:function(result){
            $("#content").html(result);
        }
    });

    //coverstory
    $("nav li:eq(0)").click(function(){
        $.ajax({
            url:"./coverstory.html",
            success:function(result){
                $("#content").html(result);
            }
        });
        $("nav li").removeClass("active");
        $(this).addClass("active");
        return false;
    });

    //characters
    $("nav li:eq(1)").click(function(){
        $.ajax({
            url:"./characters.html",
            success:function(result){
                $("#content").html(result);
            }
        });
        $("nav li").removeClass("active");
        $(this).addClass("active");
        return false;
    });

    //snapshots
    $("nav li:eq(2)").click(function(){
        $.ajax({
            url:"./snapshots.html",
            success:function(result){
                $("#content").html(result);
            }
        });
        $("nav li").removeClass("active");
        $(this).addClass("active");
        return false;
    });

    //epilogue
    $("nav li:eq(3)").click(function(){
        $.ajax({
            url:"./epilogue.html",
            success:function(result){
                $("#content").html(result);
            }
        });
        $("nav li").removeClass("active");
        $(this).addClass("active");
        return false;
    });





    $(".res_btn").click(function(){
        $("nav").addClass("active");
    });

    $("nav li").click(function(){
        $("nav").removeClass("active");
    });

    $(".close_btn").click(function(){
        $("nav").removeClass("active");
    });



});