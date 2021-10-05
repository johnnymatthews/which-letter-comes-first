// Global variables that we need everywhere.
let left_letter = null;
let right_letter = null;

// Return a random letter from the big alphabet array.
function select_letter() {
    const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];        
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

//  Get user's input and determine if they're correct.
function get_user_input(side_clicked, element_clicked) {
    console.log("User clicked:", side_clicked);

    // Find out which letter is the lowest
    let correct_letter;
    console.log(left_letter, right_letter);
    if (left_letter.position < right_letter.position) {
        correct_letter = "left";
    } else {
        correct_letter = "right";
    }

    // Call TRUE or FALSE painter function.
    answer = side_clicked == correct_letter;
    if(answer) {
        element_clicked.classList.add("answer_true");
        element_clicked.innerHTML = "<p>✔</p>";
    } else {
        element_clicked.classList.add("answer_false");
        element_clicked.innerHTML = "<p>✖</p>";
    }

    setTimeout(dom_reset, 1000);
}

// Resets the HTML back to the original view.
function dom_reset() {
    const main_element = document.getElementById("main");
    main_element.innerHTML = `
    <div id="left-letter-holder" onclick="get_user_input('left', this)">
        <p id="left-letter-text">A</p>
    </div>
    <div id="right-letter-holder" onclick="get_user_input('right', this)">
        <p id="right-letter-text">B</p>
    </div>`
    main();
}

// Control everything from here.
function main() {
    left_letter = select_letter();
    right_letter = select_letter();

    // If both letters are identical, reroll the right letter.
    while(left_letter.letter == right_letter.letter) {
        right_letter = select_letter();
    }

    paint_letters(left_letter.letter, right_letter.letter);
}

