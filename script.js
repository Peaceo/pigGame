'use strict';

var scores, roundScore, activePlayer, gamePlaying, previousScore;
init()

document.querySelector('.btn--roll').addEventListener('click', function() {
    if(gamePlaying){
        // Generate random number
        var dice = Math.floor(Math.random() * 6) + 1;

        // Display the result
        document.querySelector('#current--' + activePlayer).textContent = dice;
        document.querySelector('.dice').style.display = 'block';
        document.querySelector('.dice').src = 'dice-' + dice + '.png';

        // roundScore = document.querySelector('#score--1').textContent
        // Update the round score if the rolled number is not 1
        if (dice !== 1){
            roundScore += dice;
            document.querySelector('#current--'+ activePlayer).textContent = roundScore
        }
        else{
            // NEXT PLAYER

        nextPlayer()
        
        /* document.querySelector('.player--0').classList.remove('player--active')
        document.querySelector('.player--1').classList.add('player--active') */
        }
    }
  
})

document.querySelector('.btn--hold').addEventListener('click', function () {
    if (gamePlaying) {
        // Add current score to the global score
        scores[activePlayer] += roundScore

        // Update the UI
        // console.log(document.querySelector('#score--'+ activePlayer).textContent);
        document.querySelector('#score--'+ activePlayer).textContent = scores[activePlayer]
        // Check if the player won
        if (scores[activePlayer] >= 10){         
        document.querySelector('#name--'+ activePlayer).textContent = "WINNER!!! "
        document.querySelector('.dice').style.display = 'none'
        document.querySelector('.player--'+ activePlayer).classList.add('player--winner')
        document.querySelector('.player--'+ activePlayer).classList.remove('player--active')
        gamePlaying = false

        }
        else{
        // next player
        nextPlayer()
        }  
        
    }
     
});

function nextPlayer() {
   
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0
    roundScore = 0

    document.getElementById('current--0').textContent = 0
    document.getElementById('current--1').textContent = 0

    document.querySelector('.player--0').classList.toggle('player--active')
    document.querySelector('.player--1').classList.toggle('player--active')
    document.querySelector('.dice').style.display = 'none'    
}

document.querySelector('.btn--new').addEventListener('click', init)
   
function init() {
    scores = [0,0]
    activePlayer = 0
    roundScore = 0  
    gamePlaying = true   
    
document.querySelector('.dice').style.display = 'none'
document.getElementById('score--0').textContent = "0"
document.getElementById('score--1').textContent = "0"
document.getElementById('current--0').textContent = "0"
document.getElementById('current--1').textContent = "0"
document.getElementById('name--0').textContent = 'Player 1'
document.getElementById('name--1').textContent = 'Player 2'
document.querySelector('.player--0').classList.remove('player--winner')
document.querySelector('.player--1').classList.remove('player--winner')
document.querySelector('.player--0').classList.remove('player--active')
document.querySelector('.player--1').classList.remove('player--active')
document.querySelector('.player--0').classList.add('player--active')



}



/* dice = Math.floor(Math.random() * 6) + 1
console.log(dice); */

// setter
// document.querySelector('#current--' + activePlayer).textContent = dices

// getter
/* var x = document.querySelector('#score--' + activePlayer).textContent
console.log(x); */