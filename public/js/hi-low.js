window.onload = function() {
    buildDeck();
    shuffleDeck();
}

function buildDeck() {
    let values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
    let types = ["C", "D", "H", "S"];
    deck = [];

    for (let i = 0; i < types.length; i++) {
        for (let j = 0; j < values.length; j++) {
            deck.push(values[j] + "-" + types[i]); //A-C -> K-C, A-D -> K-D
        }
    }
    console.log(deck);
}

function shuffleDeck() {
    for (let i = 0; i < deck.length; i++) {
        let j = Math.floor(Math.random() * deck.length); // (0-1) * 52 => (0-51.9999)
        let temp = deck[i];
        deck[i] = deck[j];
        deck[j] = temp;
    }
    console.log(deck);
    console.log(deck[0]);
    return(deck[0]);
}

let currentCard = document.getElementById("card1");
document.getElementById("start").onclick = function() {
    let card1 = deck.pop();
    console.log(card1);
    currentCard.src = "/public/Asset/cards/cards/" + card1 + ".png";
    playCard.src = "/public/Asset/BACK.png";
}


let playCard = document.getElementById("card2");
document.getElementById("playHiLo").onclick = function() {
    let card2 = deck.pop();
    console.log(card2);
    playCard.src = "/public/Asset/cards/cards/" + card2 + ".png"
}

function getValue(card) {
    let data = card.split("-"); // "4-C" -> ["4", "C"]
    let value = data[0];

    if (isNaN(value)) { //A J Q K
        if (value == "A") {
            return 11;
        }
        else{
            return 10;
        }    
    }
    return parseInt(value);
    console.log(value);
}

// guess logic
function guessCard(highLowGuess, card2){
    let correctGuess;
    let Higher = document.getElementById("radioHi");
    let Lower = document.getElementById("radioLo");
    
    if(highLowGuess === Higher){        
        if(card2 > card1){
            correctGuess = true;
        }
        else {
            correctGuess = false;
        }
    }
    else if(highLowGuess === Lower){
        if(card2 < card1){
            correctGuess = true;
        }
        else {
            correctGuess = false;
        }
    }
    else {
        console.log("Please select Higher or Lower!");
        correctGuess = false;
    }    
    return correctGuess;
}

function DisplayResult() {
    if (correctGuess = true){
        document.getElementById("result").innerHTML = "You Win!";
    }

    else if (correctGuess = false){
        document.getElementById("result").innerHTML = "You Lose!";
    }

    else {
        document.getElementById("result").innerHTML = "Please select 'Higher' or 'Lower'"
    }
}