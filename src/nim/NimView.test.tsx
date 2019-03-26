import React from 'react';
import {GameInput, GameInputButtons, Messages} from "./NimView";
import Enzyme, {shallow} from "enzyme";
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({adapter: new Adapter()});

describe('NimView', function () {
    describe('Messages', () => {
        it('should render every message provided', () => {
            const component = shallow(<Messages input={['test1', 'test2']}/>)
            expect(component.find('p')).toHaveLength(2)
        });
    })
    describe('GameInput', () => {
        it('should render newGame button if stack = 0', () => {
            const newGameMock = jest.fn();
            const component = shallow(<GameInput cpuTurn={false} newGame={newGameMock} stack={0}
                                                 playersTurn={jest.fn()}/>)
            let newGameButton = component.find('button');
            expect(newGameButton).toHaveLength(1);
            expect(newGameButton.text()).toContain('Neues Spiel');
            newGameButton.simulate('click');
            expect(newGameMock).toHaveBeenCalled();
        });
        it('should render text if cpuTurn = true', () => {
            const component = shallow(<GameInput cpuTurn={true} newGame={jest.fn()} stack={11}
                                                 playersTurn={jest.fn()}/>)
            expect(component.find('p')).toHaveLength(1);
        });
        it('should render GameInputButtons if cpuTurn = false and stack > 0',()=>{
            const component = shallow(<GameInput cpuTurn={false} newGame={jest.fn()} stack={11}
                                                 playersTurn={jest.fn()}/>)
            expect(component.find(GameInputButtons)).toHaveLength(1);
        });
    });

    describe('GameInputButtons',()=>{
        it('should render 3 Buttons if stack > 2',()=>{
           const component = shallow(<GameInputButtons stack={4} playersTurn={jest.fn()}/>)
            expect(component.find('button')).toHaveLength(3)
        });
        it('should render 2 Buttons if stack = 2, 1 button if stack = 1',()=>{
           const component = shallow(<GameInputButtons stack={2} playersTurn={jest.fn()}/>)
            expect(component.find('button')).toHaveLength(2)
            const component2 = shallow(<GameInputButtons stack={1} playersTurn={jest.fn()}/>)
            expect(component2.find('button')).toHaveLength(1)

        });
    })
});