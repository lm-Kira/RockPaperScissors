const computerChoice = document.getElementById('computerChoice');
const you = document.getElementById('yourChoice');
const result = document.getElementById('result');
const userChoice = document.querySelectorAll('button');

userChoice.forEach(element => element.addEventListener('click', myChoiceDisplay));

 function myChoiceDisplay(any){
  Choice = any.target.innerText ;
  you.innerText = Choice;
  computerChoiceDisplay();
  resultDisplay();
 };

function computerChoiceDisplay(){
 let number = Math.floor(Math.random()*3);
 if(number == 0){
  computerChoice.innerText = 'Rock';
 }
 if(number == 1){
    computerChoice.innerText = 'Paper';
   }
 if(number == 2){
    computerChoice.innerText = 'Scissors';
   }
}

function resultDisplay(){
    if(you.innerText == computerChoice.innerText){
      result.innerText = 'It is an Draw , Fight Again';  
    }
    if(you.innerText == 'Rock' && computerChoice.innerText == 'Paper'){
      result.innerText = 'You are Defeated';
    }
    if(you.innerText == 'Rock' && computerChoice.innerText == 'Scissors'){
        result.innerText = 'You are Victorious';
      }
    if(you.innerText == 'Paper' && computerChoice.innerText == 'Rock'){
        result.innerText = 'You are Victorious';
      }
    if(you.innerText == 'Paper' && computerChoice.innerText == 'Scissors'){
        result.innerText = 'You are Defeated';
      } 
    if(you.innerText == 'Scissors' && computerChoice.innerText == 'Rock'){
        result.innerText = 'You are Defeated';
      }
    if(you.innerText == 'Scissors' && computerChoice.innerText == 'Paper'){
        result.innerText = 'You are Victorious';
      }      
}

