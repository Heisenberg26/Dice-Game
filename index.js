// var name1=prompt("What's your Name ?");
// var name2=prompt("What's your friend's name ?");
var randomNumber1 = Math.ceil((Math.random()*6));
var randomNumber2 = Math.ceil((Math.random()*6));
document.querySelector(".img1").setAttribute('src', 'images/' + 'dice'+[randomNumber1] + '.png');
document.querySelector(".img2").setAttribute('src', 'images/' + 'dice'+[randomNumber2] + '.png');

var img1= document.querySelector(".img1").src;
var img2= document.querySelector(".img2").src;
var num1 = Number(img1.substring(33,34));
var num2 = Number(img2.substring(33,34));

if (num1>num2) {
    document.querySelector(".neonText").innerHTML="Player 1 Wins";
}
else if(num2>num1)
{
    document.querySelector(".neonText").innerHTML="Player 2 Wins";

}
else if(num1===num2)
{
    document.querySelector(".neonText").innerHTML="Draw";
}

function myFunction() {
    document.querySelector(".img1").setAttribute('src', 'images/dice6.png');
    document.querySelector(".img2").setAttribute('src', 'images/dice6.png');

    document.querySelector("H1").innerHTML="Dice Game";
    
}