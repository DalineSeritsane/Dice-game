let player1 = "Player1";
let player2 = "Player2";

function editNames(){
    player1Name = prompt("Change Player1 Name")
    player2Name = prompt("Change Player2 Name")

    if(player1.length<1 || player2.lenght <1) {
        alert("Please enter valid names");
        return;
    }
    document.querySelector("p.Player1")
    .innerHTML = player1;

    document.querySelector("p.Player2")
    .innerHTML = player2;

}
// function to roll the dice
function rollTheDice(){
    let roundNumber = rollTheDice.roundNumber || 1;

    var player1Roll = Math.floor(Math.random()* 6)+1;
    var player2Roll = Math.floor(Math.random()* 6)+1;

    document.querySelector('.dice-player-one').src= 'images/dice' + player1Roll + '.png';
    document.querySelector('.dice-player-two').src= 'images/dice' + player2Roll + '.png';

    const player1 = player1Name[0].textContent;
    const player2 = player2Name[1].textContent;

    //tracking scores of players

    rollTheDice.player1Score = rollTheDice.player1Score || 0;
    rollTheDice.player2Score = rollTheDice.player2Score || 0;

    //determiner winner and update the h1 element
    var resultText = '';
    if(player1Roll > player2Roll){
        resultText = player1 + ' wins this round!';
} else if(player2Roll > player1Roll) {
    resultText = player2 + ' wins this round!';
}else {
    resultText = "Its a Draw!";
}

document.querySelector('h1').textContent = resultext;

if(roundNumber % 3 === 0){
    alert("Leader Board Results:"+ "\n" + player1 + ":" + rollTheDice.player1Score + "\n" + player2 + ":" + rollTheDice.player1Score);
}
//add on to scores already written
roundNumber++;
rollTheDice.roundNumber = roundNumber;
}

