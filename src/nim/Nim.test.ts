import Nim, {IGameState, randomInitBetween} from "./Nim";


function expectValueToBeBetween(min :number,max:number,value:number){
    expect(value).toBeGreaterThanOrEqual(min);
    expect(value).toBeLessThanOrEqual(max);
}

describe('Nim Game', () => {
    describe('Util',()=>{
        it('should generate a random Int between min and max',()=>{
            expectValueToBeBetween(0,1,randomInitBetween(0,1));
            expectValueToBeBetween(0,10,randomInitBetween(0,10));
        })
    });

    describe('startGame', () => {
        it('should create a default game state if no values provided', () =>{
            let startState = Nim.startGame();
            expect(startState.messages).toHaveLength(1);
            expectValueToBeBetween(0,1,startState.activePlayer);
            expect(startState.stack).toEqual(13);
            expect(startState.turn).toEqual(1);
        });
    });
    describe('doTurn',()=>{
        let startState : IGameState;
        beforeEach(()=>{
            startState = Nim.startGame();
        });
        it('should subtract the numberCHosen from the stack if activePlayer != CPU',()=>{
            startState.activePlayer = 0;
            startState.players = ['Test1','Test2'];
            const newState = Nim.doTurn(startState,4);
            expect(newState.stack).toEqual(9);
            const newState2 = Nim.doTurn(newState,4);
            expect(newState2.stack).toEqual(5);
        });
        it('should do a  cpu turn if player name = CPU and ignore numberChosen',()=>{
            startState.activePlayer = 1;
            const newState = Nim.doTurn(startState,13,);
            expectValueToBeBetween(10,12,newState.stack);
            expect(newState.activePlayer).toEqual(0);
        });
    })
});