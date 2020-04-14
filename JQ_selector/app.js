//image to show sesson
$("#seasonimg").attr("src", "fall.jpg");

//ordered list of seasons
$("#seasons").append( 
    "<li id='summer'>Summer</li>" +
    "<li id='fall'>Autumn (Fall)</li>" +
    "<li id='winter'>Winter</li>" + 
    "<li id='spring'>Spring</li>");

//user clicks list item to change the season in img, h1, and the article p describes the season
//summer click event
$("#summer").click(function(){
    $("#seasonimg").attr("src", "summer.jpg");
    $("#h1").text("Summer");
    $("#articlep").text("Summer is the warmest season of the year, falling between spring and autumn.");
}) 

//fall click event
$("#fall").click(function(){
    $("#seasonimg").attr("src", "fall.jpg");
    $("#h1").text("Autumn (Fall)");
    $("#articlep").text("Autumn, season of the year between summer and winter during which temperatures gradually decrease. It is often called fall in the United States because leaves fall from the trees at that time.");
})

//winter click event
$("#winter").click(function(){
    $("#seasonimg").attr("src","winter.jpg");
    $("#h1").text("Winter");
    $("#articlep").text("Winter is the coldest season of the year in polar and temperate zones. It occurs after autumn and before spring in each year.");
})

//spring click event
$("#spring").click(function(){
    $("#seasonimg").attr("src","spring.jpg");
    $("#h1").text("Spring");
    $("#articlep").text("Spring, also known as springtime is one of the four temperate seasons, following winter and preceding summer.");
})

//footer
$("#footer").text(Date());