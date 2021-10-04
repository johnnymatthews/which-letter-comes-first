// Global variables that we need everywhere.
const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];        

// Return a random letter from the big alphabet array.
function select_letter() {
    let letter = alphabet[Math.floor(Math.random()*alphabet.length)];
    var result = {
        letter: letter,
        position: alphabet.indexOf(letter, 0) + 1
    };
    return result;
}

// Paint two letters onto the DOM.
function paint_letters(left_text, right_text) {
    const left_letter = document.getElementById("left-letter-text");
    const right_letter = document.getElementById("right-letter-text");

    left_letter.innerHTML = left_text;
    right_letter.innerHTML = right_text;
}

// Control everything from here.
function main() {
    let left_letter = select_letter();
    let right_letter = select_letter();

    // If both letters are identical, reroll the right letter.
    while(right_letter == left_letter) {
        let right_letter = select_letter();
    }

    paint_letters(left_letter.letter, right_letter.letter);
}

