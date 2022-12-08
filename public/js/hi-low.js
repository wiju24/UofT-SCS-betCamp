
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
    let cardArr = deck;
    console.log(cardArr);    
}

function shuffleDeck() {
    for (let i = 0; i < deck.length; i++) {
        let j = Math.floor(Math.random() * deck.length); // (0-1) * 52 
        let temp = deck[i];
        deck[i] = deck[j];
        deck[j] = temp;
    }
    console.log(deck[0]); 
    let currentCard = document.getElementById("card1");
    currentCard.src = "./Asset/cards/cards/" + deck[0] + ".png"; 
}; 

document.getElementById("bet").addEventListener("click", shuffleDeck());        
    
// document.getElementById("bet").addEventListener("click", bet());
//     function bet() {
//         let card = deck[0];
//         document.getElementById("card1").src = "./Asset/cards/cards/" + card + ".png";
//     }
    


function startGame() {
        let cardImg = document.createElement("img");
        let card = deck[0];
        cardImg.src = "./Asset/cards/cards/" + card + ".png";
        document.getElementById("card1").src = "./Asset/cards/cards/" + ".png";
    }


// let random1 = shuffleDeck().value;
// console.log(random1);

// function showCurrent(){
//     currentCard = deck.pop();
//     let cardImg = document.createElement("img");
//     let card = deck.pop();
//     cardImg.src = "./card/" + card + ".png";
//     document.getElementById("card1").append(cardImg);
//     console.log(card);
// }

// document.getElementById("bet").addEventListener("click", function(showCurrent) {
//     let cardImg = document.createElement("img");
//     let card = random1;
//     cardImg.src = "./card/" + card + ".png";

//   });


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