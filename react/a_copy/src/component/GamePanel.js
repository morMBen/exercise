import React from 'react';
import MyButton from './MyButton';
import Dice from './Dice'
import MyInput from './Input';

const GamePanel = (props) => {
    const roleDice = () => {
        props.setDices([Math.floor(Math.random() * 6) + 1, Math.floor(Math.random() * 6) + 1])
    }

    return (
        <div className="gamePanel">
            <MyButton myValue='test' onUserClick={props.test} eventOn={props.eventOn} />
            <MyButton myValue="newGame" onUserClick={props.newGame} eventOn={props.eventOn} />
            <Dice injectDice={props.injectDice} diceVissibility={props.diceVisibility} />
            <MyButton myValue="Roll dice" onUserClick={roleDice} eventOn={props.eventOn} />
            <MyButton myValue="Hold" onUserClick={props.holdPoints} eventOn={props.eventOn} />
            <MyInput />
        </div>
    )

}
export default GamePanel;