
let score = JSON.parse(localStorage.getItem('score'));
if (score==null){
  score={
    win:0,
    lose:0,
    tie:0,

  }
}
      function displayScore(){
          document.querySelector('.js-score').innerHTML=
          `wins are ${score.win} and the loses are ${score.lose} and ties are ${score.tie}`;
          }
displayScore();
let computerResult='';
let randomNumber;
let result='';
let pick='';
function moveTestor(pick) {
        
    let randomNumber = Math.random();
    if  (randomNumber < (1/3)){
      computerResult= 'rock';
    }
    else if (randomNumber >= 1/3 && (randomNumber < (2/3))) {
        computerResult ='paper';        
}
    else if (randomNumber >= 2/3 && (randomNumber < (1))){
        computerResult = 'scissors';

    }

    if (pick===computerResult){
      result='tie'
    }
    else if ((pick==='rock' && computerResult==="paper")||(pick==='paper' && computerResult==="scissors")||(pick==='scissors' && computerResult==="rock")){
      result='you lose'
    }
    else {
      result='you win'
    }
    
    if (result ==='you win'){
      score.win +=1;
    }
    else if( result==='you lose'){
      score.lose += 1;

    }
    else if (result === 'tie'){
      score.tie +=1;
    }
  
    localStorage.setItem('score',JSON.stringify(score));
     document.querySelector('.js-result').innerHTML=`${result}`;
     document.querySelector('.js-move').innerHTML=`you picked <img src="${pick}.jpg" > ,computer picked <img src="${computerResult}.jpg">`;

     displayScore();
    
  }
  let autoplayinterval;

  function autoplay()
{

  let picker= Math.random();
  if (picker<=1/3){
    pick='rock';
  }
  else if (picker>1/3 && picker<=2/3){
    pick="paper";
  }
  else{
    pick="scissors";
  }
  moveTestor(pick);
  autoplayinterval = setInterval(() => {
    const moves = ['rock', 'paper', 'scissors'];
    const pick = moves[Math.floor(Math.random() * moves.length)];
    moveTestor(pick);
  },1000);   
}

 function stopautoplay(){
  clearInterval(autoplayinterval);
  
}


 