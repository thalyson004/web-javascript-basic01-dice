

function playDices(){
  var randomNumber1 = Math.floor(Math.random()*6) + 1;
  var randomNumber2 = Math.floor(Math.random()*6) + 1;

  document.querySelector('.firstResult').textContent = randomNumber1.toString();
  document.querySelector('.secondResult').textContent = randomNumber2.toString();

  var text = document.querySelector('.resultText');

  if( randomNumber1==randomNumber2 ){
    text.textContent = "Draw game!!!";
  }else if( randomNumber1<randomNumber2 ){
    text.textContent = "First player wins.";
  }else{
    text.textContent = "Second player wins.";
  }

  text.style.fontSize = "3rem";
}
