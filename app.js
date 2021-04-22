//very first thing to do is display a pop up where you can type team names


//select the playable squares to generate a word on
const playableSquares = document.querySelectorAll('.playable')

//The starting square if the phrase is not too long
const startingSquare = playableSquares[11]
//function for populating the squares and turning them white
let testPhrase = "My name is Alex"
//testPhrase = testPhrase.split('').filter(char => /[a-zA-Z]/.test(char));
//i need to find a way to filter commas and periods out of the string so we dont create unneeded spaces on the board

//varables to determinte the state of the game (3 rounds before game over)
let gameOver = false;
let roundNum = 1;

const game = () => {
    // while (gameOver === false) {

    // }
}



let letters = testPhrase.split("")


const populateSquares = (phrase) => {
    //make it start on the start square on the second row if its not too long
    let words = phrase.split(" ")
    let wordLetters = phrase.split("")
    // for (let i = 0; i < letters.length; i++) {
    //     if (letters[i] !== " ") {
    //         playableSquares[10 + i].classList.add('lettersquare')
    //     }
    // }
    let position = 10
    let remainSpace = 12
    let repositionCount = 0
    for (word of words) {
        if (!word[words.length]) {
            word += " "
        }
        //repositions the word to a new line if it wont fit
        if (word.length - 1 > remainSpace) {
            position += remainSpace
            remainSpace = 12
            repositionCount++
        }
        for (let i = 0; i < word.length; i++) {
            if (word[i].match(/[a-z]/i)) {
                playableSquares[position].classList.add('lettersquare')
            }
            position++
            remainSpace--
        }
    }

    //for starting the next words on a new line, I should check to see if the length of the phrase is greater than 12
    //first i should split it into separate words, and then if it is greater than 12, start the next words on the next listen
    //i might need to make some breakpoints like if its greater than 12, use the two middle lines, greater than 20 etc
    //maybe make a variable that is in the loop and counts down the remaining space in the line, and if the next word in the letters array is longer than the remaining squares, put it at the first square on the next line, and reset the counter
}

populateSquares(testPhrase)


//select the white letter squares
const letterSquares = document.querySelectorAll('.lettersquare')



//listen for key presses
document.addEventListener('keyup', (e) => {
    if (letters.includes(e.key.toUpperCase()) || letters.includes(e.key)) {
        for (let i = 0; i < letters.length; i++) {
            if (letters[i] === e.key.toUpperCase()) {
                letterSquares[i].textContent = e.key.toUpperCase();
            }
            if (letters[i] === e.key) {
                letterSquares[i].textContent = e.key
            }
        }
    }
})
//search white squares for the letter and then change it to
