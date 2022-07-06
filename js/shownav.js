$(document).ready(function(){
    $(window).scroll(function(){
        if($(window).scrollTop() > 20){
            $("#TopNav").css({"background-color":"white"});   
        }
        else{
            $("#TopNav").css({"background-color":"rgba(0,0,0,0)"});
        }

    })
})

$(document).ready(function(){
    $(window).scroll(function(){
        if($(window).scrollTop() > 20){
            $("#UndNav").css({});   
        }
        else{
            $("#UndNav").css({});
        }

    })
})

$(document).ready(function(){
    $(window).scroll(function(){
        if($(window).scrollTop() > 20){
            $(".textnav").css({"color":"black"},{"background-color":"red"});   
        }
        else{
            $(".textnav").css({"color":"white"});
        }

    })
})
