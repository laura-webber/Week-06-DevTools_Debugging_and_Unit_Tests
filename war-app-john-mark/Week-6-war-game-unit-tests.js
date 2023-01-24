var expect = chai.expect;

describe('MyFunctions', function(){
    describe('deal hands', function(){
        it('should deal 26 cards to each player', function(){
            let game = new Game();
            game.start();
            let hand1 = game.player1.deck;
            let hand2 = game.player2.deck;
            expect(hand1.length).to.equal(hand2.length);
        });

    
    });
});