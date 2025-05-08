// //The Game of War //

// /* How is it played?
// How many players? 2
// Using what? A deck of 52 cards
// How many cards to each player? Half of the deck to each player
// 26 cards to each player.
// Basic rule of the game: whoever has the highest card number wins the hand
// and takes all the cards in that hand.
// How to end game? Game ends when you each player has gone through
// all of their cards.
// Who won? The person with the hightest amount of won hands won the game 
// entirely.
// How to keep track of who is winning? Each time a player wins a hand 
// the player that won that hand, gets a point.
// What about a tie? If both players show the same card number,
// no one wins the hand and each player gets a 0 point for the tie.
// What if you lose? State you lose and show points comparision.


// */



// class Game {

//     constructor () {

//     }

//     // score() { //I want the score to keep track of how many times the player or computer wins a hand.
//     //     let PlayerScore= 0;
//     //     let OtherPlayerScore= 0;


        
//     // }



//     start() {
//        let startGame= parseInt(prompt(`Do You Want to Play War?
//             1) Yes
//             2) No`));

//         if (startGame === 1){
//             Cards.shuffleCards();
//         } else if (startGame === 2) {
//             alert(`Come Back When You Are Ready for A Challenge!`);   
//         }
        
//     }



//     playACard(){

//     }


//     // throwCard(playRandomCard){ //I want to take one of the random cards from the top of the deck and play or reveal that random card. Whichever card is higher wins.
//     //     let playRandomCard = (//function for shuffling a random card)

//     // }

//         // winHandLoseHand(){


//         //     if (playedCard > otherPlayedCard){
//         //         alert(`You won that hand! You get 1 point`)
//         //     } else if (otherPlayedCard > playedCard){
//         //         alert(`The computer won that hand!`)
//         //     }

//         // }


// }


// class Cards {
//     constructor(suit, number){
//         this.suit= suit;
//         this.number= number;
//         this.shuffledDeck= [];
//     }


//     shuffleCards() { 

//         let arrayofHearts = [2,3,4,5,6,7,8,9,10, "J", "Q","K", "A"];
//         let arrayofSpades= [2,3,4,5,6,7,8,9,10, "J", "Q","K", "A"];
//         let arrayofDiamonds = [2,3,4,5,6,7,8,9,10, "J", "Q","K", "A"];
//         let arrayofClubs = [2,3,4,5,6,7,8,9,10, "J", "Q","K", "A"];

//         let deckofAllCards = arrayofHearts.concat(arrayofDiamonds, arrayofSpades, arrayofClubs);
//         // console.log(deckofAllCards); // all the values of each array of cards above have been added to be one array of 52 elements, YAY!!//
        
//         this.shuffledDeck= [];
        

//         for (let i=0; i < deckofAllCards.length; i++){

//             let randomDeckIndex = Math.floor(Math.random()*deckofAllCards.length) ;
//             let randomDeckCard= deckofAllCards[randomDeckIndex];
//             this.shuffledDeck.push(randomDeckCard);
//         }


//         }
    
//     dealCards() { //I want to take a deck of 52 cards and split them between 2 players.
   
//         let firstHalfDeck= shuffledDeck.slice(0, 26);
//         console.log(this.shuffledDeck.slice(0,26)) 

//         let secondHalfDeck= shuffledDeck.slice(26);
//         console.log(this.shuffledDeck.slice(26))

//         let mainPlayerHand= null;
//         let otherPlayerHand= null;

//         mainPlayerHand= firstHalfDeck; 
//         // console.log(mainPlayerHand); 
//         otherPlayerHand= secondHalfDeck;
//         // console.log(otherPlayerHand);
    
    
// }
// }

// // class Player {
// //     constructor (){
// //         this.hand = []
// //     }

// // cardsInHand() {

// //     console.log(mainPlayersCards)
// // }


// // playCard(card) {

// //     let playRandomCard = prompt(`Do you want to throw a card out?
// //         1) Yes
// //         2) No`);
// //     }
// //     if (playRandomCard == 1){
// //         throwCard();
// //     } else if (playRandomCard == 2){
// //         let exitGame = prompt(`Do you want to exit the game?
// //             1) Yess
// //             2) No`)
// //     }

// // }

// // let mainPlayersCards = [];
// // let otherPlayersCards = [];








// let game= new Game();
// game.start();