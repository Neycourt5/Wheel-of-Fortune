//Player names in the game
const p1Name = document.querySelector("#p1namedisplay")
const p2Name = document.querySelector("#p2namedisplay")
const p3Name = document.querySelector("#p3namedisplay")

//select scores
const p1Score = document.querySelector("#p1score")
const p2Score = document.querySelector("#p2score")
const p3Score = document.querySelector("#p3score")

//select player turn notifier
const turnDisp = document.querySelector(".turn")

//modal popup elments
const modalBtn = document.querySelector("#submitnames")
const p1NameInput = document.querySelector("#p1nameinput")
const p2NameInput = document.querySelector("#p2nameinput")
const p3NameInput = document.querySelector("#p3nameinput")

//pop up modal page at game start
const modal = document.querySelector(".modal")

//selecting the containers to remove the hidden display class when the game starts
const gameContainer = document.querySelector(".game-container")
const buttonsContainer = document.querySelector(".buttonscontainer")
const playersContainer = document.querySelector(".playerscontainer")

//select the playable squares to generate a word on
const playableSquares = document.querySelectorAll('.playable')



//score variables?

//declare array of player objects
const players = [{
    name: p1Name.textContent,
    score: p1Score
}, { name: p2Name.textContent, score: p2Score.textContent }, { name: p3Name.textContent, score: p3Score.textContent }]


//Beginning pop up to choose team names
modalBtn.addEventListener("click", (e) => {
    modal.classList.add("none")
    gameContainer.classList.remove("none")
    buttonsContainer.classList.remove("none")
    playersContainer.classList.remove("none")
    p1Name.textContent = p1NameInput.value
    p2Name.textContent = p2NameInput.value
    p3Name.textContent = p3NameInput.value
    turnDisp.textContent = `${p1Name.textContent} turn`
    //newRound()
    //assign names
    players[0].name = p1Name.textContent
    players[1].name = p2Name.textContent
    players[2].name = p3Name.textContent
    //start game
    game()
})

// Split into two functions 
// Game flow is:
// 1.Becomes a players turn 
// 2. Check for their guess
// 3. If true, replace the letters square
// 4. If false, move to next player

//maybe something like
// //if (checkForLetter) {
//     replaceLetters()
// } else {initTurn()}

const checkForLetter = (e, gamePhrase, player) => {
    //select the white letter squares
    const letterSquares = document.querySelectorAll('.lettersquare')
    let letters = gamePhrase.split("")
    let wrongGuess = false
    letters = letters.filter(function (str) {
        return /\S/.test(str);
    });
    //search white spaces for letters and replace add letters into squares
    if (letters.includes(e.key.toUpperCase()) || letters.includes(e.key)) {
        for (let i = 0; i < letters.length; i++) {
            if (letters[i] === e.key.toUpperCase()) {
                letterSquares[i].textContent = e.key.toUpperCase();
            }
            else if (letters[i] === e.key) {
                letterSquares[i].textContent = e.key
            }
        }
    }
}

const populateSquares = (phrase) => {
    //make it start on the start square on the second row if its not too long
    let words = phrase.split(" ")
    let wordLetters = phrase.split("")
    let position = 10
    let remainSpace = 12
    let repositionCount = 0
    console.log(phrase)

    //populate the board with white squares
    for (word of words) {
        //repositions the word to a new line if it wont fit
        if (word.trim().length > remainSpace) {
            position += remainSpace
            remainSpace = 12
            repositionCount++
        }
        for (let i = 0; i < word.length; i++) {
            if (word[i].trim().match(/[a-z]/i)) {

                playableSquares[position].classList.add('lettersquare')
            }
            position++
            remainSpace--
        }
        //end of the word so this establishes a space between words
        position++
        remainSpace--
    }
}


//varables to determinte the state of the game (3 rounds before game over)
let gameOver = false;
let roundNum = 1;


//Need to make async maybe
//If function resolves, keep it on the same player and let them guess again (and spin when i get to that)
//Otherwise if it doesnt resolve, move to the next player
const playerTurn = (gamePhrase, player) => {
    turnDisp.textContent = `${player.name}'s turn`
    //Spin wheel here
    let wrongGuess = false
    //If wheel lands on money start a loop that goes until they guess a wrong letter
    //else, move to next {player

    //listen for key presses
    document.addEventListener('keyup', (e) => { checkForLetter(e, gamePhrase, player) })
}

const game = () => {
    //populates the board with white squares


    //Populate squares with the phrase
    const phrases = ["My name is Alex", "I like to play baseball", "This is bullshit", "Sally sold sea shells"]
    let gamePhrase = phrases[(Math.floor(Math.random() * phrases.length))]
    populateSquares(gamePhrase)

    // while (!gameOver) {


    // }


    // //new game/round function
    // const newRound = () => {
    //     let gamePhrase = phrases[(Math.floor(Math.random() * phrases.length))]
    //     populateSquares(gamePhrase)
    // }


    //Function for the player turn

    playerTurn(gamePhrase, players[0])


}

