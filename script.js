let playerScore=0, computerScore=0;

const playerSign = document.getElementById('playerSign')
const computerSign = document.getElementById('computerSign')
const playerScoreText = document.getElementById('playerScore')
const computerScoreText = document.getElementById('computerScore')
const paper = document.getElementById('papbtn')
const scissor = document.getElementById('scibtn')
const rock = document.getElementById('rockbtn')
const scoreInfo = document.getElementById('scoreInfo')
const scoreMessage = document.getElementById('scoreMessage')


paper.addEventListener('click',()=>handleEvent("paper"))
scissor.addEventListener('click',()=>handleEvent("scissor"))
rock.addEventListener('click',()=>handleEvent("rock"))



function computerPlay(){
    const gm= ["rock","paper","scissor"];
    let random = Math.floor((Math.random()*3)+1);
    return gm[random-1];
}

function playRound(playerSelection, computerSelection) {

    if(playerSelection==="paper" )
    {
        if(computerSelection == "rock"){
            
            return 1

        }else if(computerSelection == "scissor"){
            return -1

        }else{
             return 0
        }
    }
    else if(playerSelection== "scissor")
    {
        if(computerSelection == "paper"){
            return 1

        }else if(computerSelection == "rock"){
            return -1

        }else{
            return 0
        }
    }
    else if(playerSelection == "rock")
    {
        if(computerSelection == "paper"){
             return -1
        }else if(computerSelection == "scissor"){
             return 1
        }else{
             return 0
        }
    }
}

function handleEvent(playerSelection){

    cmOption = computerPlay()
    updateChoices(playerSelection,cmOption)
    result = playRound(playerSelection,cmOption)

    if(result == 1){
      
        playerScore+=1
        scoreInfo.textContent = "you win!"
        playerScoreText.textContent = "Player : " + playerScore
        computerScoreText.textContent = "Computer : "+computerScore

    }else if(result==-1){
        
        computerScore +=1
        scoreInfo.textContent = "you lost!"
        playerScoreText.textContent = "Player : " + playerScore
        computerScoreText.textContent = "Computer : "+computerScore

    }else{

        scoreInfo.textContent = "it's tie!"
        
    }

    if(playerScore==5){
        endGame("you")
    }

    if(computerScore == 5){
        endGame("pc")
    }


}

function updateChoices(playerSelection,computerSelection){

    

    switch(playerSelection){
        case 'rock':
            playerSign.textContent = '✊'
            break
        case 'scissor':
            playerSign.textContent = '✌️'
           break
        case 'paper': 
            playerSign.textContent ='🤚'
            break   
    }

    switch(computerSelection){
        case 'rock':
            computerSign.textContent = '✊'
            break
        case 'scissor':
            computerSign.textContent = '✌️'
           break
        case 'paper': 
            computerSign.textContent ='🤚'
            break   
    }

    

}

function endGame(win){

    if(win == 'you'){
        scoreMessage.textContent = "hey! you win the game"
        restartGame()
        setTimeout(()=>{
            scoreMessage.textContent = "Score 5 to win the game"
        },4000)
    }
    else{
        scoreMessage.textContent = "hey! you lost the game"
        restartGame()
        setTimeout(()=>{
            scoreMessage.textContent = "Score 5 to win the game"
        },4000)
    }

}

function restartGame(){
    playerScore=0
    computerScore = 0
    scoreInfo.textContent = "Choose your weapon"
    playerScoreText.textContent = "Player : " + playerScore
    computerScoreText.textContent = "Computer : "+computerScore
    
}



    


