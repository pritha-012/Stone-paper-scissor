const choices=["stone","paper","scissors"];
const player=document.getElementById("player");
const computer=document.getElementById("computer");
const result=document.getElementById("result");
const player_score=document.getElementById("player_score");
const comp_score=document.getElementById("comp_score");
const themeToggle = document.getElementById("theme-toggle");

let players=0;
let comps=0;

function playGame(playerChoice){
    const compChoice=choices[Math.floor(Math.random() * 3)];
    let results="";
    result.classList.remove("greenText","redText","yellowText");

    
    if(playerChoice==compChoice){
        results="Its a tie";
        result.classList.add("yellowText");
        
    }else{
        switch(playerChoice){
            case "stone" :
                results=(compChoice==="scissors") ? "You Win" : "You Lose";
                break;
            case "paper" :
                results=(compChoice==="stone")  ? "You Win" : "You Lose";
                break;
            case "scissors" :
                results=(compChoice==="paper")  ? "You Win" : "You Lose";
                break;
        }
    }

    player.textContent=`PLAYER : ${playerChoice}`; 
    computer.textContent=`COMPUTER : ${compChoice}`;
    result.textContent=results;

    
   
    

    

    if(results==="You Win"){
        players++;
        result.classList.add("greenText");
        
    }else if(results==="You Lose"){
        comps++;
        result.classList.add("redText");
        

    }
    player_score.textContent=`PLAYER : ${players}`; 
    comp_score.textContent=`COMPUTER : ${comps}`;

     if (players === 5) {
        alert("🎉 Congratulations! You won the game!");
        resetGame();
    } else if (comps === 5) {
        alert("😢 Oh no! The computer won the game.");
        resetGame();
    }
        
}
function resetGame() {
    players = 0;
    comps = 0;
    player_score.textContent = "PLAYER : 0";
    comp_score.textContent = "COMPUTER : 0";
    result.textContent = "";
    player.textContent = "PLAYER :";
    computer.textContent = "COMPUTER :";
    result.className = "";
}
themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    document.body.classList.toggle("light-mode");

    const newTheme = document.body.classList.contains("dark-mode") ? "dark-mode" : "light-mode";
    

    updateToggleText(newTheme);
});

function updateToggleText(theme) {
    themeToggle.textContent = theme === "dark-mode" ? "☀️ Light Mode" : "🌙 Dark Mode";
}