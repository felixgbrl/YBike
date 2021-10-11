var itemCount = 4;
var currItem = 1;

$("#next").click(function(){
    if(currItem == itemCount){
        $(".slider").animate({
            marginLeft: "0px",
        })
        currItem = 0;
    }
    else{
        $(".slider").animate({
            marginLeft: "-=100%",
        })

    }
    currItem++;
})