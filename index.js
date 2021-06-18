var randomNumber = Math.floor (Math.random() * 6) + 1 // 1 - 6
var playerOneImage = "image/dice"+randomNumber+".png";
var randomNumber = Math.floor (Math.random() * 6) + 1 // 1 - 6
var playerOneImage1 = "image/dice"+randomNumber+".png";

document.querySelector('.img1').setAttribute('src', playerOneImage);
document.querySelector('.img2').setAttribute('src', playerOneImage1);

if(playerOneImage > playerOneImage1){
    document.querySelector('h1').innerHTML ='player 1 win';
}else if (playerOneImage < playerOneImage2){
    'player 2 win';
}else{
    document.querySelector('h1').innerHTML = 'Roll Again';
}