let userScore=0;
let computerScore=0;
const choices=document.querySelectorAll(".choice");
let msg=document.querySelector("#msg");
let userScorepara=document.querySelector("#user-score");
let computerScorepara=document.querySelector("#computer-score");

const genComputerChoice = () =>{
    const option=["rock","paper","scissors"];
    const randIdx=Math.floor(Math.random()*3);
    return option[randIdx];
    //rock,paper,scissors
}

const drawGame=()=>{
    msg.innerText="Game was Draw. play again";
    msg.style.backgroundColor="#081b31";

};

const showWinner=(userWin,userChoice,computerChoice)=>{
    if(userWin){
        userScore++;
        userScorepara.innerText=userScore;
        msg.innerText=`you win! your ${userChoice} beats ${computerChoice}`;
        msg.style.backgroundColor="green";
    }
    else{
        computerScore++;
        computerScorepara.innerText=computerScore;
        msg.innerText=`you lose ${computerChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red";
    }

}
let playGame=(userChoice)=>{
    
    //generate computer choice -> moduler
    const computerChoice = genComputerChoice();
    if(userChoice === computerChoice){
        //Draw game
        drawGame();
    }
    else{
        let userWin=true;
        if(userChoice==="rock"){
            //scissor,paper
         userWin=computerChoice==="paper"?false:true;
        }

        else if(userChoice==="paper"){
            //rock, scissors
            userWin=computerChoice==="scissors"?false:true;
        }
        else{
            //rock,paper
            userWin=computerChoice==="rock"?false:true;
        }
        showWinner(userWin,userChoice,computerChoice);
    }
}


choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    });
});