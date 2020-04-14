//image to show sesson
document.getElementById("seasonimg").src = "fall.jpg";

//ordered list of seasons
document.getElementById("seasons").innerHTML += 
    "<li id='summer'>Summer</li>" +
    "<li id='fall'>Autumn (Fall)</li>" +
    "<li id='winter'>Winter</li>" + 
    "<li id='spring'>Spring</li>";

//user clicks list item to change the season in img, h1, and the article p describes the season
//summer click event
document.getElementById("summer").addEventListener("click", function(){
    document.getElementById("seasonimg").src = "summer.jpg";
    document.getElementById("h1").innerHTML = "Summer";
    document.getElementById("articlep").innerHTML = "Summer is the warmest season of the year, falling between spring and autumn.";
})

//fall click event
document.getElementById("fall").addEventListener("click", function(){
    document.getElementById("seasonimg").src = "fall.jpg";
    document.getElementById("h1").innerHTML = "Autumn (Fall)";
    document.getElementById("articlep").innerHTML = "Autumn, season of the year between summer and winter during which temperatures gradually decrease. It is often called fall in the United States because leaves fall from the trees at that time.";
})

//winter click event
document.getElementById("winter").addEventListener("click", function(){
    document.getElementById("seasonimg").src = "winter.jpg";
    document.getElementById("h1").innerHTML = "Winter";
    document.getElementById("articlep").innerHTML = "Winter is the coldest season of the year in polar and temperate zones. It occurs after autumn and before spring in each year.";
})

//spring click event
document.getElementById("spring").addEventListener("click", function(){
    document.getElementById("seasonimg").src = "spring.jpg";
    document.getElementById("h1").innerHTML = "Spring";
    document.getElementById("articlep").innerHTML = "Spring, also known as springtime is one of the four temperate seasons, following winter and preceding summer.";
})

//footer
document.getElementById("footer").innerHTML = Date();

