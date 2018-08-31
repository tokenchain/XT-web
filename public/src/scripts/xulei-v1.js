/**
 * Created by XULEI on 2017/9/20.
 */

$(function(){

    //初始化函数
    $(window).resize();
    $(window).scroll(function() {
        if ($(this).scrollTop() > 0){
            $('header').addClass("sticky");
        }
        else{
            $('header').removeClass("sticky");
        }
    });

    $('body').on('focus','.form-control input', function(){
        if($(this).attr('readonly')) {
            return false;
        }
        $(this).parent().parent().addClass('active');
        $(this).parent().parent().addClass('prompt');
    });
    $('body').on('blur','.form-control input', function(){
        if($(this).val() != '') {
            $(this).parent().parent().addClass('active');
            $(this).parent().parent().removeClass('prompt');
        }else {
            $(this).parent().parent().removeClass('active');
            $(this).parent().parent().removeClass('prompt');
        }
    });

    $("body").on('click','.imglist li',function(){

        $(this).siblings('li').removeClass('active');
        $(this).addClass('active');
    })

    $("body").on("click",".add-account",function(){
        //var theNum = Math.ceil((Math.random()*5)-1);
        setTimeout(function(){
            $("#s1").xslider({
                unitdisplayed:5,
                movelength:5
           });
           //$("#s1 .imglist li").eq(theNum).addClass("active");  //头像前五随机选择


        },300)

    })

})