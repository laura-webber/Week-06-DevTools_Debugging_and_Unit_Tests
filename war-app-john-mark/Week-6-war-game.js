//code starts on line 370

//comment the following console.log at lines 516, 518, 523, 530, 533, 545, 547 before running Test class, otherwise processer will bog down at high number of iterations

const baseDeck = [
        {
          "value": 1,
          "face": 2,
          "suit": "clubs",
          "count": 1,
          "name": "2 of clubs"
        },
        {
          "value": 2,
          "face": 3,
          "suit": "clubs",
          "count": 2,
          "name": "3 of clubs"
        },
        {
          "value": 3,
          "face": 4,
          "suit": "clubs",
          "count": 3,
          "name": "4 of clubs"
        },
        {
          "value": 4,
          "face": 5,
          "suit": "clubs",
          "count": 4,
          "name": "5 of clubs"
        },
        {
          "value": 5,
          "face": 6,
          "suit": "clubs",
          "count": 5,
          "name": "6 of clubs"
        },
        {
          "value": 6,
          "face": 7,
          "suit": "clubs",
          "count": 6,
          "name": "7 of clubs"
        },
        {
          "value": 7,
          "face": 8,
          "suit": "clubs",
          "count": 7,
          "name": "8 of clubs"
        },
        {
          "value": 8,
          "face": 9,
          "suit": "clubs",
          "count": 8,
          "name": "9 of clubs"
        },
        {
          "value": 9,
          "face": 10,
          "suit": "clubs",
          "count": 9,
          "name": "10 of clubs"
        },
        {
          "value": 10,
          "face": "Jack",
          "suit": "clubs",
          "count": 10,
          "name": "Jack of clubs"
        },
        {
          "value": 11,
          "face": "Queen",
          "suit": "clubs",
          "count": 11,
          "name": "Queen of clubs"
        },
        {
          "value": 12,
          "face": "King",
          "suit": "clubs",
          "count": 12,
          "name": "King of clubs"
        },
        {
          "value": 14,
          "face": "Ace",
          "suit": "spades",
          "count": 13,
          "name": "Ace of spades"
        },
        {
          "value": 1,
          "face": 2,
          "suit": "spades",
          "count": 14,
          "name": "2 of spades"
        },
        {
          "value": 2,
          "face": 3,
          "suit": "spades",
          "count": 15,
          "name": "3 of spades"
        },
        {
          "value": 3,
          "face": 4,
          "suit": "spades",
          "count": 16,
          "name": "4 of spades"
        },
        {
          "value": 4,
          "face": 5,
          "suit": "spades",
          "count": 17,
          "name": "5 of spades"
        },
        {
          "value": 5,
          "face": 6,
          "suit": "spades",
          "count": 18,
          "name": "6 of spades"
        },
        {
          "value": 6,
          "face": 7,
          "suit": "spades",
          "count": 19,
          "name": "7 of spades"
        },
        {
          "value": 7,
          "face": 8,
          "suit": "spades",
          "count": 20,
          "name": "8 of spades"
        },
        {
          "value": 8,
          "face": 9,
          "suit": "spades",
          "count": 21,
          "name": "9 of spades"
        },
        {
          "value": 9,
          "face": 10,
          "suit": "spades",
          "count": 22,
          "name": "10 of spades"
        },
        {
          "value": 10,
          "face": "Jack",
          "suit": "spades",
          "count": 23,
          "name": "Jack of spades"
        },
        {
          "value": 11,
          "face": "Queen",
          "suit": "spades",
          "count": 24,
          "name": "Queen of spades"
        },
        {
          "value": 12,
          "face": "King",
          "suit": "spades",
          "count": 25,
          "name": "King of spades"
        },
        {
          "value": 14,
          "face": "Ace",
          "suit": "diamonds",
          "count": 26,
          "name": "Ace of diamonds"
        },
        {
          "value": 1,
          "face": 2,
          "suit": "diamonds",
          "count": 27,
          "name": "2 of diamonds"
        },
        {
          "value": 2,
          "face": 3,
          "suit": "diamonds",
          "count": 28,
          "name": "3 of diamonds"
        },
        {
          "value": 3,
          "face": 4,
          "suit": "diamonds",
          "count": 29,
          "name": "4 of diamonds"
        },
        {
          "value": 4,
          "face": 5,
          "suit": "diamonds",
          "count": 30,
          "name": "5 of diamonds"
        },
        {
          "value": 5,
          "face": 6,
          "suit": "diamonds",
          "count": 31,
          "name": "6 of diamonds"
        },
        {
          "value": 6,
          "face": 7,
          "suit": "diamonds",
          "count": 32,
          "name": "7 of diamonds"
        },
        {
          "value": 7,
          "face": 8,
          "suit": "diamonds",
          "count": 33,
          "name": "8 of diamonds"
        },
        {
          "value": 8,
          "face": 9,
          "suit": "diamonds",
          "count": 34,
          "name": "9 of diamonds"
        },
        {
          "value": 9,
          "face": 10,
          "suit": "diamonds",
          "count": 35,
          "name": "10 of diamonds"
        },
        {
          "value": 10,
          "face": "Jack",
          "suit": "diamonds",
          "count": 36,
          "name": "Jack of diamonds"
        },
        {
          "value": 11,
          "face": "Queen",
          "suit": "diamonds",
          "count": 37,
          "name": "Queen of diamonds"
        },
        {
          "value": 12,
          "face": "King",
          "suit": "diamonds",
          "count": 38,
          "name": "King of diamonds"
        },
        {
          "value": 14,
          "face": "Ace",
          "suit": "hearts",
          "count": 39,
          "name": "Ace of hearts"
        },
        {
          "value": 1,
          "face": 2,
          "suit": "hearts",
          "count": 40,
          "name": "2 of hearts"
        },
        {
          "value": 2,
          "face": 3,
          "suit": "hearts",
          "count": 41,
          "name": "3 of hearts"
        },
        {
          "value": 3,
          "face": 4,
          "suit": "hearts",
          "count": 42,
          "name": "4 of hearts"
        },
        {
          "value": 4,
          "face": 5,
          "suit": "hearts",
          "count": 43,
          "name": "5 of hearts"
        },
        {
          "value": 5,
          "face": 6,
          "suit": "hearts",
          "count": 44,
          "name": "6 of hearts"
        },
        {
          "value": 6,
          "face": 7,
          "suit": "hearts",
          "count": 45,
          "name": "7 of hearts"
        },
        {
          "value": 7,
          "face": 8,
          "suit": "hearts",
          "count": 46,
          "name": "8 of hearts"
        },
        {
          "value": 8,
          "face": 9,
          "suit": "hearts",
          "count": 47,
          "name": "9 of hearts"
        },
        {
          "value": 9,
          "face": 10,
          "suit": "hearts",
          "count": 48,
          "name": "10 of hearts"
        },
        {
          "value": 10,
          "face": "Jack",
          "suit": "hearts",
          "count": 49,
          "name": "Jack of hearts"
        },
        {
          "value": 11,
          "face": "Queen",
          "suit": "hearts",
          "count": 50,
          "name": "Queen of hearts"
        },
        {
          "value": 12,
          "face": "King",
          "suit": "hearts",
          "count": 51,
          "name": "King of hearts"
        },
        {
          "value": 14,
          "face": "Ace",
          "suit": "hearts",
          "count": 52,
          "name": "Ace of hearts"
        }
];

//class Card
class Card {
    constructor(count, suit){
        this.value = (count % 13);
        
        switch (this.value) {
            case 0:
                this.face = "Ace";
                this.value = 14;
                break; 
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
            case 7:
            case 8:
            case 9:
                this.face = this.value + 1;
                break;
            case 10:
                this.face = "Jack";
                break;
            case 11:
                this.face = "Queen";
                break;
            case 12:
                this.face = "King";
                break;
            default:
                this.error = `error building card ${this.value}`;
        }
        this.suit = suit;
        this.count = count;
        this.name = `${this.face} of ${this.suit}`
    }

}
/*
//building a deck to copy via browser's console, cause I'm too lazy to type it
let deck = [];

for(let i = 1; i < 53; i++){
    let count = i;

    let suit;
    switch (true) {           //switch case for divying up suits
        case count<13:
            suit = "clubs";
            break;
        case count<26:
            suit = "spades";
            break;
        case count<39:
            suit = "diamonds";
            break;
        case count<53:
            suit = "hearts";
    }
    deck.push(new Card(i,suit));   //pushing new instance of Card, passing in the iterator and the suit
    
}
console.log(deck)
*/

//class Deck
class Deck {
    constructor(){
    //own.props: array of cards
        this.shuffledDeck = [...baseDeck];  //copies the baseDeck value into the shuffledDeck array
    }

    //own.method: shuffle and distribute deck to players
    shuffle(deck){
        let random;
        let temp;
        
        //iterate through the unshuffled deck, starting at the last: the Fisher Yates shuffle
        for(let i = this.shuffledDeck.length-1;i>-1;i--){    
            
            random = Math.floor(Math.random() * i);      //pick a number between 0 (inclusive) and i
            temp = this.shuffledDeck[i];                //assign the value of shuffledDeck[i] to a temp variable
                        
            this.shuffledDeck[i] = this.shuffledDeck[random]  //assigns the last position in the shuffledDeck array with the value of the baseDeck at the random position
            this.shuffledDeck[random] = temp;            //assigns the random position in the shuffledDeck array with the value of the baseDeck at the last position
          
        }
    }

    //deal
    deal(){
    //make 2 arrays and deal the shuffled cards into them, returning them
        let hand1 = [];
        let hand2 = [];
        for(let i = 0; i< 52;i++){
            hand1.push(this.shuffledDeck[i]);
            i++;
            hand2.push(this.shuffledDeck[i]);
        }
        
        return [hand1,hand2]
    }

}


//class Player
class Player{
  //own.props:  deck, games won
    constructor(name, num){
      this.name = name;
      this.deck = [];
      this.pointsWon = 0;
      this.number = num;
    }
}
    

//class Game??
class Game{
    constructor(){
    //own.props:  hands left
        this.handsLeft = 26;
        this.player1 = new Player("Player One",1);
        this.player2 = new Player("Player Two",2);
        this.winningPlayer = 0;
    }

    //on start, deal 26 cards to each player, from deck of 52
    start(){
        let deck = new Deck();
        deck.shuffle();
        let playerHands = deck.deal();
        this.player1.deck = playerHands[0];
        this.player2.deck = playerHands[1];

        return this.play();
    }

    //iterate through turns where each Player plays a card
    play(){
      let winner;
      for(let i = 0;i< 26;i++){
        console.log(this.handsLeft, "hands remaining")       //remove the comments here to show hands remaining
        this.handsLeft--;
        console.log(`Player One: ${this.player1.deck[i].name}  vs Player Two: ${this.player2.deck[i].name}`)    //remove the comments here to show cards played
        //Player whose card is higher gets a point, ties = 0 points
        switch (true){
          case (this.player1.deck[i].value > this.player2.deck[i].value):
            this.player1.pointsWon++;
            console.log("player one wins the hand")    ////remove the comments here to show player one wins the hand
            break;
          case (this.player1.deck[i].value < this.player2.deck[i].value):
            this.player2.pointsWon++;
            console.log("player two wins the hand")   ////remove the comments here to show player two wins the hand
            break;
          default:
            console.log(`Tie: no points won`);    ////remove the comments here to show tie round
        }
        console.log(`Player One: ${this.player1.pointsWon}, Player Two: ${this.player2.pointsWon}
        `);   ////remove the comments here to show player points after each hand
      }
      switch (true){
        case (this.player1.pointsWon > this.player2.pointsWon):
          winner = this.player1;
          this.winningPlayer = 1;
          break;
        case (this.player1.pointsWon < this.player2.pointsWon):
          winner = this.player2;
          this.winningPlayer = 2;
          break;
        default:
          //console.log("Tie Game");       ////remove the comments here to show tie game
      }
     this.end(winner);                   ////remove the comments here to call the end method, which shows which player wins the game
     return this.winningPlayer;
    }

    

    //after end, display score and declare the winner
    end(winner){
      if(!winner){
        console.log(`Tie game: both players had ${this.player1.pointsWon}`)
      }else{
        console.log(`${winner.name} won with ${winner.pointsWon} points`);
    }
}
}

let game = new Game;
game.start();

/*          //remove comments here to test multiple iterations of the game and view results.  comment out all console.logs above to not bog down the processor
class Test {
  constructor(numberOfGames){
    this.numberOfGames = numberOfGames;
    this.gamesWonByPlayer1 = 0;
    this.gamesWonByPlayer2 = 0;
    this.tieGames = 0;
  }

  run(){
    let winner = 0;
    for(let i = 0;i<this.numberOfGames;i++){
        const game = new Game();
        winner = game.start();
        if(winner == 1){
          this.gamesWonByPlayer1++;
        }else if (winner == 2){
          this.gamesWonByPlayer2++;
        }else {
          this.tieGames++;
        }
    }
    console.log(`${this.numberOfGames} games were played,
    Player One: ${this.gamesWonByPlayer1}
    Player Two: ${this.gamesWonByPlayer2}
    Tie Games: ${this.tieGames}`);
  }

}

let test = new Test(5);
test.run();

*/