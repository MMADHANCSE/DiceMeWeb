var random1=Math.floor(Math.random()*6)+1;

var randomimg="images/dice"+random1+".png";

var image1=document.querySelectorAll("img")[0];

image1.setAttribute("src",randomimg);

var random2=Math.floor(Math.random()*6)+1;

var randomimg2="images/dice"+random2+".png";

var image2=document.querySelectorAll("img")[1];

image2.setAttribute("src",randomimg2);

if(random1>random2){
    document.querySelector("h2").innerHTML="🚩 Player 1 Wins!";
}
else if(random2>random1){
    document.querySelector("h2").innerHTML="Player 2 Wins! 🚩";
}
else{
    document.querySelector("h2").innerHTML="Draw !";
}

