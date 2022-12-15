
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
document.getElementById("bet").onclick = function() {
    let card1 = deck.pop();
    console.log(card1);
    currentCard.src = "\Asset\cards\cards" + card1 + ".png";
    playCard.src = "\Asset\BACK.png";
}



let playCard = document.getElementById("card2");
document.getElementById("playHiLo").onclick = function() {
    let card2 = deck.pop();
    console.log(card2);
    playCard.src = "./Asset/cards/cards/" + card2 + ".png"
}

// guess logic
function guessCard(highLowGuess, newCard){
    let correctGuess;
    
    if(highLowGuess === "Higher"){        
        if(newCard > previousCard){
            correctGuess = true;
        }
        else {
            correctGuess = false;
        }
    }
    else if(highLowGuess === "Lower"){
        if(newCard < previousCard){
            correctGuess = true;
        }
        else {
            correctGuess = false;
        }
    }
    else {
        console.log("No guess provided");
        correctGuess = false;
    }
    
    return correctGuess;
}

// guess logic
// function guessCard(highLowGuess, newCard){
//     var correctGuess;
    
//     if(highLowGuess === "Higher"){        
//         if(newCard > previousCard){
//             correctGuess = true;
//         }
//         else {
//             correctGuess = false;
//         }
//     }
//     else if(highLowGuess === "Lower"){
//         if(newCard < previousCard){
//             correctGuess = true;
//         }
//         else {
//             correctGuess = false;
//         }
//     }
//     else {
//         console.log("No guess provided");
//         correctGuess = false;
//     }
    
//     return correctGuess;
// }