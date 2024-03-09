let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const computerScorePara = document.querySelector("#computer-score");

const genComChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};

// const alertt = () => {
//   msg.addEventListener("click", () => {
//     alert("click on any 3 given choices....");
//   });
// }
// return alertt;

const drawGame = () => {
  msg.innerText = "Game was draw, Play again";
  msg.style.backgroundColor = "#C2E7FF";
}

const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin){
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
  }else {
    computerScore++;
    computerScorePara.innerText = computerScore;
    msg.innerText = `You lose! Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "red";
  }
}

const playGame = (userChoice) => {
  console.log("user choice = ", userChoice);
  //Generate computer choice
  const compChoice = genComChoice();
  console.log("comp choice = ", compChoice );

  if (userChoice === compChoice){
    //Draw Game
    drawGame();
  } else{
    let userWin = true;
    if (userChoice === "rock"){
      //scissors, paper
      userWin = compChoice === "paper" ? false : true;
    }else if(userChoice === "paper") {
      //rock, scissors
      userWin = compChoice === "scissors" ? false : true;
    } else{
      //rock, paper
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};


choices.forEach((choice) =>{
  console.log(choice);
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  })
})