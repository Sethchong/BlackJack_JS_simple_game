# BlackJack_JS_simple_game

this is a simple Blackjack game that i wrote while learning JS, this is from Scrimba JS course

### so here we are trying to build a js project for blackjack game 

once an user hits blackjack or go > 21, he or she can no longer draw a card. A very simple game to test out logic functions 

trying to learn some if else conditions 

``` if (sum ===21 ){}``` the ```===``` means strictly - in this sense, it mainly concerns if its string or number or not such as 100 and '100'


```html
<!--this is to create a blackjack game -->

<html>
	<head>
		<script src="blackjack.js"></script>
	</head>
	<body>
	</body>
</html>
```

```js
// 1. Create two variables, firstCard and secondCard.
// Set their values to a random number between 2-11
// 2. Create a variable, sum, and set it to the sum of the two cards
let firstCard = 10
let secondCard = 11
let hasBlackJack = false

// we also want to let the computer know if the player is still in the game, so we assign a var to it

let isAlive = true

// 1. declaring a var and assign its value to an empty string
let message = ''
let sum = firstCard + secondCard

  
// 2. reassigning the message var to the string
if (sum < 21){
	message = "Do you want to draw a new card? 🙂"
} else if (sum === 21){
	message = "Woohoo! you got a blackjack! 🥳"
	hasBlackJack = true
} else {
	message = "Sorry mate, you are out of the game! 😭 "
	isAlive = false
}

 

// 3. log it out!
console.log(message)
```

^ above is the most basic function, but what we want is also to display onto the webpage 
