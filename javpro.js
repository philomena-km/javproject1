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
let roundResult= playRound(getHumanChoice(), getComputerChoice());
console.log(roundResult);
function playGame(){
    let humanScore=0;
    let computerScore=0;
    console.log(playRound(getHumanChoice(), getComputerChoice()));
    console.log(playRound(getHumanChoice(), getComputerChoice()));
    console.log(playRound(getHumanChoice(), getComputerChoice()));
    console.log(playRound(getHumanChoice(), getComputerChoice()));
    console.log(playRound(getHumanChoice(), getComputerChoice()));

}
playGame();