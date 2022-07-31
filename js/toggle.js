$(document).ready(function () {
    $("#toggle").click(function () {
        $("#menubar").show(300);
    });
    $("#aboutmebtn").click(function (e) {
        $("#aboutmep").show(300);
    });
    $("#aboutmebtnhide").click(function (e) {
        $("#aboutmep").hide(300);
    });
    $("#learningnow").click(function (e) { 
        $("#learncntnt").toggle(500);        
    });

});

$(document).ready(function () {
    $("#toggleback").click(function () {
        $(".menubarback").hide(300);
    });
});
