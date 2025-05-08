class Cards {
    constructor (suit, number){
    this.suit = suit 
    this.number = number
}

}

let newCard = new Cards("spades", "5");
console.log(newCard);


//cardValues//

let cardValues= {
    "2": 2, "3": 3, "4": 4, "5": 5, "6": 6, "7": 7, "8": 8, "9": 9, "10": 10,
    "J": 11, "Q": 12, "K": 13, "A": 14
}

function getCardValue(card){
    return cardValues[card];
}

let testArray= [];
testArray.push(card)

// shuffleCards() 

    let totalNumberOfCards = 52;

    let arrayofHearts = [2,3,4,5,6,7,8,9,10, "J", "Q","K", "A"];
    let arrayofSpades= [2,3,4,5,6,7,8,9,10, "J", "Q","K", "A"];
    let arrayofDiamonds = [2,3,4,5,6,7,8,9,10, "J", "Q","K", "A"];
    let arrayofClubs = [2,3,4,5,6,7,8,9,10, "J", "Q","K", "A"];

   console.log(arrayofHearts);
   console.log(arrayofDiamonds);
   console.log(arrayofSpades);
   console.log(arrayofClubs);

   console.log(arrayofHearts.length)


   console.log(Math.floor(Math.random()*52)); //Math.floor(Math.random()*#) will generate a random number from 0 to whatever number value that is set at the end of the code//
   Math.floor(Math.random()*52)+1 //by adding the "+1" at the end, this will now generate a random number anywhere from 1 to whatever set number that is in being multiplied in the parenthesis

console.log(Math.floor(Math.random()*arrayofSpades.length)); /*This code does not give me access to inside of the array
rather it provides me with random index numbers of the number of elements in the array. Meaning, there are
13 numbers in the array, it will randomlly generate numbers 0-12 (due to the 0 based index system) rather than the card values
of 2-A. I need to go inside of the array to get random numbers.*/


let randomHeartCards= [] //how to get one of the random elements inside of the array//

for (let i=0; i < arrayofHearts.length; i++){ //I am iterating over the length of the array that is the cards for hearts, therefore 13 cards//
    // in order to get the numbers/values inside of the array, I need t create a variable to represent them//
    
    let randomHeartIndex= null; //the variable to represent the index or placement in the array//
    let randomHeartCard= null; //using this variable, I can utilize the variable above to get the value of what the index number will be//

    randomHeartIndex = Math.floor(Math.random()*arrayofHearts.length) ; //here I am saying, that the randomHeartIndex will be equal to whatever randomized number from the lenght of the array which are numbers 1-13//
    randomHeartCard= arrayofHearts[randomHeartIndex]; //now I am saying the randomHeartCard will be equal to the indexed number (which was randomized from the code above) of the array for the hearts cards//
    randomHeartCards.push(randomHeartCard) //I will then push the randomHeartCard into the randomHeartsCards array, and it will provide numbers as long as the length of the hearts array//
}
console.log (randomHeartCards); //now I have a hand of random heart cards, a total of 13//

//^ this code randomized the cards in the array of hearts and provided a new array of heart cards in a randomized order//
//Now I want to take this concept and apply it to the whole deck of cards and push the random cards into the players hand//

let deckofAllCards = arrayofHearts.concat(arrayofDiamonds, arrayofSpades, arrayofClubs);
console.log(deckofAllCards); // all the values of each array of cards above have been added to be one array of 52 elements, YAY!!//


let shuffledDeck= [];


for (let i=0; i < deckofAllCards.length; i++){

        randomDeckIndex = Math.floor(Math.random()*deckofAllCards.length) ;
        randomDeckCard= deckofAllCards[randomDeckIndex];
        shuffledDeck.push(randomDeckCard);


}

console.log(shuffledDeck);
console.log(`^ this is the entire shuffled deck`)


// dealcards()//

//now I want to take the shuffled deck and deal half of them to main player and the other half to the other player//

// let mainPlayerHand= [];
// let otherPlayerHand= [];

let firstHalfDeck= shuffledDeck.slice(0, 26);
// console.log(shuffledDeck.slice(0,26)) /*one way of splitting the shuffledDeck array in half using the slice method. I am essentially saying slice,
// starting at index 0 of the array (which is included) and cut all the way up to the 26th index of the array (which is not included) and make that a new array. */

let secondHalfDeck= shuffledDeck.slice(26);
// console.log(shuffledDeck.slice(26)) 
// /*This one I am essentially saying, cut from the 26th indexed element (which is included) and put that and everything 
// after that into a new array */

// slice(): a method that returns a new array that contains a 
// portion of the original array, determined by the method parameters, 
// the starting index (inclusive) and ending index (not inclusive) of 
// the elements to be included in the new array.


//The only problem with this method, is that the numbers will continue to shuffle around //

// mainPlayerHand.push(firstHalfDeck);
// console.log(mainPlayerHand);
// console.log(mainPlayerHand.length); // the computer is counting the length of the hand as 1 rather than 26....why?

// otherPlayerHand.push(secondHalfDeck);
// console.log(otherPlayerHand);

// console.log(mainPlayerHand[0]);



let mainPlayerHand= null; /*I changed mainPlayerHand to be an empty variable and then added the array to it
rather than have it sit as an empty array already (above), it was putting the array 
inside of the empty array and therefore that array was considered to be one element rather than 26 different elements.
When I change the mainPlayerHand to be null/empty, it will now take on the new data type, that of the array.
*/
mainPlayerHand= firstHalfDeck; //now I am reassigning the variable to be the array of the first half of the shuffled deck //
console.log(mainPlayerHand); //now I can index in the new array that has been assigned to mainPlayerHand. 
//next challenge.....getting the cards to stop shuffling while in the hand//
console.log( `^ this is the hand of the main player with 26 cards`);
let otherPlayerHand= null;
otherPlayerHand= secondHalfDeck;
console.log(otherPlayerHand);
console.log( `^ this is the hand of the other player with 26 cards`);

//cardValues//

let 

// playACard //

/*now I want to take one of the cards at random from both mainPlayer and otherPlayer a
and show each card and then determine which card is higher to therefore determine who wins that round */


let throwACard= parseInt(prompt(`Do you want to throw a card?
    1) Yes
    2) No`))

if (throwACard === 1){

    let mainPlayedCard= null;//now I just want to grab one random card from my random hand of 26 cards//
    for (let i=0; i < mainPlayerHand.length; i++){

        
        mainRandomCardIndex= Math.floor(Math.random()*mainPlayerHand.length)
        mainPlayedCard = mainPlayerHand[mainRandomCardIndex]

        
       
    }
    console.log(`You therw down ${mainPlayedCard}`);

    // mainPlayerHand.pop(mainRandomCard)
    // console.log(mainPlayerHand.length);

    let otherPlayedCard= null;//now I just want to grab one random card from my random hand of 26 cards//
    for (let i=0; i < otherPlayerHand.length; i++){

        
        otherRandomCardIndex= Math.floor(Math.random()*otherPlayerHand.length)
        otherPlayedCard = otherPlayerHand[otherRandomCardIndex]

        
       
    }
    console.log(`The computer therw down ${otherPlayedCard}`);

}


// console.log(mainPlayerHand[25]);
// console.log(` ^ this is me grabbing one of the cards in the main players hand`)


//winHandLoseHand//
/* Now I need some logic for the computer to recognize who wins the turn or not
either the main player or the other player. I also need to get it to removed
the played card from both players hand and also add a point to whoever wins the round */


// winHandLoseHand() 

    if (mainPlayedCard > otherPlayedCard){
        console.log(`You won that hand`);
    } else if (otherPlayedCard > mainPlayedCard){
        console.log(`The computer won that hand`)
    } else if ( mainPlayedCard == otherPlayedCard){
        console.log(`Looks like it is a tie! No one won that round!`)
    }
    



    