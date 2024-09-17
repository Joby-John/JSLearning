
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissor  = document.getElementById("scissor");

const playerPoint = document.getElementById("playerPoints");
const botPoint = document.getElementById("computerPoints"); 

const choices = ["👊", "✋", "✌️"];
let userPoint = 0;
let computerPoint = 0;

function getComputerChoice()
{
    const randomChoice = Math.floor(Math.random()*choices.length);
    return choices[randomChoice];
}


function handleClick(userChoice)
{
    const existingTie = document.getElementById("tie");
    if (existingTie) {
        existingTie.remove();
    }

    rock.style.backgroundColor = "";
    paper.style.backgroundColor = "";
    scissor.style.backgroundColor = "";

    if(userChoice==="👊")
    {
        rock.style.backgroundColor = "green";
    }
    else if(userChoice==="✋")
    {
        paper.style.backgroundColor = "green";
    }
    else if(userChoice==="✌️")
    {
        scissor.style.backgroundColor = "green";
    }

    const computerChoice = getComputerChoice();

     // Highlight the computer's choice
     if (computerChoice === "👊") {
        rock.style.backgroundColor = "red";
    } else if (computerChoice === "✋") {
        paper.style.backgroundColor = "red";
    } else if (computerChoice === "✌️") {
        scissor.style.backgroundColor = "red";
    }

    if(computerChoice === userChoice)
    {
        const tie = document.createElement("h1");
        tie.id = "tie";
        tie.textContent = "That a tie";
        tie.style.backgroundColor = "green";

        const pointsElement = document.getElementById("points");
        pointsElement.insertAdjacentElement("beforebegin", tie); 
    }
    else if(computerChoice==="👊")
    {
        if(userChoice==="✋")
        {
            userPoint += 1;
        }
        else
        {
        
            computerPoint += 1;
            
        }
    }
    else if(computerChoice==="✋")
    {
        if(userChoice==="👊")
        {
            computerPoint += 1;
        }
        else
        {
            userPoint += 1;
        }
    }
    else if(computerChoice === "✌️")
    {
        if(userChoice==="👊")
        {
            userPoint += 1;
        }
        else
        {
            computerPoint += 1;
        }
    }

    botPoint.textContent = `Computer Score: ${computerPoint}`;
    playerPoint.textContent = `Player Score: ${userPoint}`;

    document.getElementById("player").textContent = `Player: ${userChoice}`;
    document.getElementById("computer").textContent = `Computer: ${computerChoice}`;

    setTimeout(()=>{
        rock.style.backgroundColor = "hsl(180, 100%, 50%)";
        paper.style.backgroundColor = "hsl(180, 100%, 50%)";
        scissor.style.backgroundColor = "hsl(180, 100%, 50%)";
    }, 1000)

}
rock.addEventListener("click", (event)=> handleClick(event.target.textContent));
paper.addEventListener("click", (event)=>handleClick(event.target.textContent));
scissor.addEventListener("click", (event)=>handleClick(event.target.textContent));
