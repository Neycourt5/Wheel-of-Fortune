//Player names in the game are
const p1Name = document.querySelector("#p1namedisplay")
const p2Name = document.querySelector("#p2namedisplay")
const p3Name = document.querySelector("#p3namedisplay")

//select scores
const p1Score = document.querySelector("#p1score")
const p2Score = document.querySelector("#p2score")
const p3Score = document.querySelector("#p3score")

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


//Beginning pop up to choose team names
modalBtn.addEventListener("click", (e) => {
    modal.classList.add("none")
    gameContainer.classList.remove("none")
    buttonsContainer.classList.remove("none")
    playersContainer.classList.remove("none")
    p1Name.textContent = p1NameInput.value
    p2Name.textContent = p2NameInput.value
    p3Name.textContent = p3NameInput.value
    //newRound()
})





//function for populating the squares and turning them white
let testPhrase = "My name is Alex"
//testPhrase = testPhrase.split('').filter(char => /[a-zA-Z]/.test(char));
//i need to find a way to filter commas and periods out of the string so we dont create unneeded spaces on the board

//varables to determinte the state of the game (3 rounds before game over)
let gameOver = false;
let roundNum = 1;


// while (gameOver === false) {

// }



//populates the board with white squares
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

//Make game here
const phrases = ["My name is Alex", "I like to play baseball", "This is bullshit", "Sally sold sea shells"]
let gamePhrase = phrases[(Math.floor(Math.random() * phrases.length))]
populateSquares(gamePhrase)
// //new game/round function
// const newRound = () => {
//     let gamePhrase = phrases[(Math.floor(Math.random() * phrases.length))]
//     populateSquares(gamePhrase)
// }

//select the white letter squares
const letterSquares = document.querySelectorAll('.lettersquare')



//listen for key presses
document.addEventListener('keyup', (e) => {
    let letters = gamePhrase.split("")
    letters = letters.filter(function (str) {
        return /\S/.test(str);
    });
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
})
//search white squares for the letter and then change it to

