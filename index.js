

let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""

// we want to store the message el so that the display can show the cards that we are dealt with 

let messageEl = document.getElementById("message-el")

let sumEl = document.querySelector("#sum-el")
// when using query selector, if you want to define as ID, have to use # 

let cardsEl = document.querySelector("#cards-el")


let playerName = "Seth"
let playerChips = 145

let playerEl = document.getElementById("player-el")
playerEl.textContent = playerName + ": $" + playerChips

// random function so that the game can be played better

function getRandomNum() {
    // reason why we +1 is because w/o it, we will get 0 at times
    let randomNumber = Math.floor(Math.random() * 11) + 1


    // if ace > return 11 
    // if 11-13 > return 10 
    if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }

}



// startGame function to start the game 
function startGame() {
    isAlive = true
    let firstCard = getRandomNum()
    let secondCard = getRandomNum()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}


// renderGame function is to continue the game 
function renderGame() {

    // writing a for loop to print out all the cards available
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }

    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message

    sumEl.textContent = "Sum: " + sum

}

function newCard() {
    // we only want to allow the player to get a new card if she is alive AND does not have a blackjack
    if (isAlive === true && hasBlackJack === false) {
        console.log("Drawing a new card from the deck!")
        // create a card variable and hard code its value to a number (2-11)
        let newValue = getRandomNum()
        // add the new card to the sum variable
        sum += newValue

        // we want to push the card to the array after we draw the card
        cards.push(newValue)  // recall that cards is the name of the array 

        // call renderGame()
        renderGame()
    }
}

