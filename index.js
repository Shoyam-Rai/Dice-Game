var random1=Math.floor(Math.random()*6)+1;
var randomimage="dice"+random1+".png";
var randomlink="images/" + randomimage;

var image1=document.querySelectorAll("img")[0];

image1.setAttribute("src",randomlink);

var random2=Math.floor(Math.random()*6)+1;
var randomimage2="dice"+random2+".png";
var randomlink2="images/" + randomimage2;

var image2=document.querySelectorAll("img")[1];

image2.setAttribute("src",randomlink2);

if(random1>random2){
    document.querySelector("h1").innerHTML="PLAYER 1 wins!!";
}
else if(random1<random2){
   
        document.querySelector("h1").innerHTML="PLAYER 2 wins!!";
}
else{
    document.querySelector("h1").innerHTML="DRAW";
}
