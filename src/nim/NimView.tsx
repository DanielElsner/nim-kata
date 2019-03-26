import React, {Component} from "react";
import Nim, {IGameState} from "./Nim";


interface IGameInputButtonsProps {
    stack: number,
    playersTurn: (option: number) => () => void,
}

interface IGameInputProps extends IGameInputButtonsProps {
    cpuTurn: boolean,
    newGame: () => void
}

export const GameInputButtons = ({stack, playersTurn}: IGameInputButtonsProps) => {
    const options = [];
    for (let i = 1; i <= Math.min(stack, 3); i++) {
        options.push(i);
    }
    return <div>{options.map(option => <button key={'option' + option}
                                               onClick={playersTurn(option)}>nimm {option}</button>)}</div>
};

export const GameInput = ({stack, cpuTurn, playersTurn, newGame}: IGameInputProps) => {
    if (stack > 0) {
        return cpuTurn ? <p>CPU am Zug</p> : <GameInputButtons stack={stack} playersTurn={playersTurn}/>
    } else {
        return <button onClick={newGame}>Neues Spiel</button>
    }
};

export const Messages = ({input}: { input: string[] }) => <div>
    {input.map((message, index) => <p key={'message' + index}>{message}</p>)}
</div>

export default class NimView extends Component<{}, IGameState> {

    constructor(props: {}) {
        super(props);
        this.state = Nim.startGame();
    }

    cpuTurn = () => {
        let stateAfterCPUTurn = Nim.doTurn(this.state, 0);
        window.setTimeout(() => this.setState(stateAfterCPUTurn), 1000)
    };

    playersTurn = (numberChosen: number) => () => {
        this.setState(Nim.doTurn(this.state, numberChosen));
    };

    newGame = () => this.setState(Nim.startGame())

    render() {
        const {stack, messages, activePlayer,players} = this.state;
        const player = players[activePlayer];
        const cpuTurn = Nim.isCPU(player);
        if (cpuTurn && stack > 0) {
            this.cpuTurn();
        }
        return (
            <div>
                <h2>Stack: {stack} Streichhölzer</h2>
                <h3>{player} ist dran.</h3>
                <Messages input={messages}/>
                <div>
                    <GameInput playersTurn={this.playersTurn} stack={stack} cpuTurn={cpuTurn} newGame={this.newGame}/>
                </div>
            </div>
        );
    }

}