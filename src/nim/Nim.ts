export function randomInitBetween(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

export interface IGameState {
    stack: number,
    turn: number,
    activePlayer: number,
    messages: string [],
    players:[string,string]
}

export default class Nim {

    static startGame(players :[string,string] = ['Spieler','CPU']): IGameState {
        return {
            stack: 13,
            turn: 1,
            activePlayer: randomInitBetween(0, 1),
            messages: ['Spiel gestartet'],
            players
        }
    }

    static isCPU(player:string){
        return player === 'CPU';
    }

    static doTurn(gs: IGameState, numberChosen: number) {
        const messages = [...gs.messages];
        const player = gs.players[gs.activePlayer];
        if (Nim.isCPU(player)) {
            numberChosen = randomInitBetween(1, Math.min(gs.stack, 3));
        }
        const newStack = gs.stack - numberChosen;
        messages.push(player + ' nimmt ' + numberChosen);
        if (newStack === 0) {
            messages.push(player + ' hat verloren.');
        }
        return {
            ...gs,
            turn: gs.turn + 1,
            activePlayer: gs.activePlayer === 0 ? 1 : 0,
            messages: messages,
            stack: newStack
        }
    }
}

