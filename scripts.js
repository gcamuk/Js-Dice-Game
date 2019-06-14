

    
    
    let die1 = document.getElementById("dice1");
    let die2 = document.getElementById("dice2");
    let score = 0;


    diceRoll = () => {

        let dice1 = Math.floor(Math.random() * 6) + 1;
        let dice2 = Math.floor(Math.random() * 6) + 1;
        // CREATING VARIABLES THAT GENERATE DICE VALUES BETWEEN 1 & 6 WHEN ROLLLED

        let diceSum = dice1 + dice2;
        // VARIABLE HOLDING SUM OF TOTAL OF DICE ROLLED

        die1.innerHTML = dice1;
        die2.innerHTML = dice2;
        resultDisplay.innerHTML = `You rolled ${diceSum}`;
        score += diceSum
        rollTotal.innerHTML = `Your score is ${score}`;
        // SENDING VALUES OF DICE ROLLED TO HTML ELEMENTS TO BE DISPLAYED
    

        if (score >= 20) {
            alert('You won, first to 20!!!');
            window.location.reload();
        } 
        // CHECKS SCORE AND ENDS GAME WITH ALERT WHEN SCORE REACHES 20, RESETS GAME ON OK
        
        if (dice1 === 1) {
            alert('Game over you rolled a 1!!');
            window.location.reload();
        }

        if (dice2 === 1) {
            alert('Game over you rolled a 1!!');
            window.location.reload();
        }
        // CHECK IF EITHER DICE ROLLS A 1, DISOLAYS ALERT IF SO AND RESETS GAME ON OK



        // if (dice1 === 1 && dice2 ===1) {
        //     alert('SNAKE EYES');
        //     window.location.reload();
        // }


    }

    // scoreCheck = () => {
    //  if (Score >= 20) {
    //         alert = "Game Over"
    //     }

    // }