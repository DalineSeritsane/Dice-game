let player1 = "Player1";
let player2 = "Player2";

function editNames(){
    player1 = prompt("Change Player1 Name")
    player2 = prompt("Change Player2 Name")

    if(player1.length<1 || player2.lenght <1) {
        alert("Please enter valid names");
        return;
    }
    document.querySelector("p.Player1")
    .innerHTML = player1;

    document.querySelector("p.Player2")
    .innerHTML = player2;

}

function rollTheDice() {
    let diceNum1 = document.querySelector("img1");
    let diceNum2 = document.querySelector("img2");

    diceNum1.setAttribute("src", "dice-roll-dice-gif.gif")
    diceNum2.setAttribute("src", "dice-roll-dice-gif.gif")

    let result = document.querySelector('h1')
    setTimeout(() => {
        let randomNumber1 = Math.floor(Math.random()*6)+1;
        let randomNumber2 = Math.floor(Math.random()*6)+1;

        diceNum1.setAttribute('src', 'dice'+randomNumer1+'.png)
        diceNum2.setAttribute('src', 'dice'+randomNumber2+'.png')   
        
        
        //determing the winner
        if(randomNumber1 === randomNumber2){
            result.innerHTML = "Draw!"
        }
        else if(randomNumber1<randomNumber2){
            result.innerHTML = (player2+ "Wins!");
            
        }
        else{result.innerHTML = (player1+ "Wins!");

        }
    
    
    
    
    }, 2500);
}