diceRoll = () => {
    
    let die1 = document.getElementById("dice1");
    let die2 = document.getElementById("dice2");
    // CREATING VARIABLES LINKED TO DICE 1 & 2 IN HTML

    let dice1 = Math.floor(Math.random() * 6) +1;
    let dice2 = Math.floor(Math.random() * 6) +1;
    // CREATING VARIABLES THAT GENERATE DICE VALUES BETWEEN 1 & 6 WHEN ROLLLED

    let diceSum = dice1 + dice2;
    // GENERATING SUM OF TOTAL OF DICE ROLLED

    die1.innerHTML = dice1;
    die2.innerHTML = dice2;
    resultDisplay.innerHTML = diceSum;
    // SENDING VALUES OF DICE ROLLED TO HTML ELEMENTS

    
    

}

// gomeOver = () => {
//     if (document.getElementById("dice1").value == 1 || document.getElementById("dice2").value == 1) {
//     alert = 'Game Over'
//     }
// } DOESNT WORK YET



