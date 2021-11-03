const plays=["Rock","Paper","Scissors"];

function computerPlay(){
  return plays[Math.floor(Math.random()*3)];}

function playRound(player,computer){
  if (plays.indexOf(player) == 1+ plays.indexOf(computer)){
    result="Won";
    return [result,`You ${result}! ${player} beats ${computer}`]; 
  }
  else if (plays.indexOf(computer)== 1+ plays.indexOf(player)){
    result="Lost";
    return [result,`You ${result}! ${computer} beats ${player}`] ;
  }
  else if (plays.indexOf(computer)==plays.indexOf(player)){
    result="Draw";
    return [result,"Its a draw!"];
  }
  else if(plays.indexOf(computer)==2+plays.indexOf(player)){
    result="Won";
    return [result,`You ${result}! ${player} beats ${computer}`];
 }
  else if(plays.indexOf(player)==2+plays.indexOf(computer)){
    result="Lost";
    return [result,`You ${result}! ${computer} beats ${player}`];
  }
}

function mouseover(){
  this.classList.add('mouseover');
}

function mouseout(){
  this.classList.remove('mouseover');
}

let player_score=0,comp_score=0;

const computer_play=document.getElementById('Computer');
computer_play.textContent="Welcome. Have fun!";

const final_result=document.getElementsByClassName('Result')[0];
final_result.textContent='Computer is asleep!';

const score=document.getElementById('Score');
score.textContent="Score- 0:0";

const btns=document.querySelectorAll('.button');
btns.forEach((btn) => {
  btn.addEventListener('mouseover',mouseover);
  btn.addEventListener('mouseout',mouseout);
  btn.addEventListener('click',()=>{
    play=(btn.id);
    final_result.textContent=playRound(play,c=computerPlay())[1] ;
    result==="Won" ? player_score+=1 : result=="Lost" ? comp_score+=1 : null;
    computer_play.textContent=`Computer's play: ${c}`;
    score.textContent=`Score- ${player_score}:${comp_score}`;
    if (comp_score>=5 || player_score>=5){
      comp_score==5 ? str='You Lost!' : str='You Won!';
      final_result.textContent=str+'\tPlease restart the game by reloading!'
      btns.forEach((btn) => {
      btn.classList.add('gameover');
    });}
  });
});


   
