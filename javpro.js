let greeting="Hello ladies and gentlemen!";
console.log(greeting);

function getComputerChoice(){
    const random=Math.random();
    if(random<0.33){
    return "rock";
    }
    else if(random<0.66){
    return "paper";
    }
    else{
    return "scissors";
    }
}
function getHumanChoice(){
    return prompt("Enter rock, paper or scissors");
}
let humanScore=0;
let computerScore=0;
function playRound(humanChoice, computerChoice){
    if (humanChoice===computerChoice){
        return "its a draw!"
    }
    else if(
        (humanChoice=== "rock"&& computerChoice==="scissors")||
        (humanChoice==="paper"&& computerChoice==="rock")||
        (humanChoice==="scissors"&& computerChoice==="paper")
    ){
        humanScore++;
        return `you win ${humanChoice} beats ${computerChoice}`;
    }else{
        computerScore++;
        return `you lose ${computerChoice} loses to ${humanChoice}`;    
    }
}

const btn=document.querySelector("#btn");
const container=document.querySelector("#container");
btn.addEventListener("click",function(){
    const humanChoice=getHumanChoice();
    const computerChoice=getComputerChoice();
    const result=playRound(humanChoice,computerChoice);
    container.textContent= `${result}|score-You:${humanScore}|computer:${computerScore}`;
    if(humanScore===5){
        container.textContent="you win the game! final score-you: 5|computer:"+computerScore;
    }
    else if(computerScore===5){
        container.textContent="computer wins the game!final score -Computer:5| you: "+humanScore;
    }
    console.log(result);
});
