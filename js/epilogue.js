$(document).ready(function(){

    var $ep_arr = [
        ["ep_top_01.png", "“당시 무참히 희생된 어린 영혼들에 대한 미안함이 가장 컸다.”"],
        ["ep_top_02.png", "“학도병들은 군번 없는 용사였다.<br> 싸우는 줄은 알았지만, 단체로 가서 어려운 작전을 수행한 줄은 몰랐다.”"],
        ["ep_top_03.png", "“화려한 영웅의 이야기가 아니라 마이너리티의 희생을 다뤄야 해<br>무엇보다 진정성을 담고자 했다”"],
        ["ep_bottom.png", ""],
    ];

    var $ep_box = `
    <div class="cont">
        <div class="pic">
            <img src="./img/ep_top_01.png" alt="에필로그이미지">
        </div>
        <div class="text">
            <span>“당시 무참히 희생된 어린 영혼들에 대한 미안함이 가장 컸다.”</span>
        </div>
    </div>
    `;
    for(i in $ep_arr){
        $(".epilogue .wrap").append($ep_box);
    };

    $(".epilogue .wrap .cont").each(function(index){
        $(this).find(".pic img").attr("src","./img/"+$ep_arr[index][0]);
        $(this).find(".text span").html($ep_arr[index][1]);
    });
    $(".epilogue .wrap .cont").eq(3).find(".text").remove();





});