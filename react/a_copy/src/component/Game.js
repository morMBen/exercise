import React from 'react';
import GamePanel from './GamePanel';
import ScoresTable from './ScoresTable';
// import MyButton from './MyButton'

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            diceVisibility: false,
            pointsToWin: 100,
            dices: [6, 6],
            playerTurn: 1,
            allEventOn: true,
            players: [
                {
                    currentScore: 0,
                    globalScore: 0,
                },
                {
                    currentScore: 0,
                    globalScore: 0,
                }
            ]
        };

    }
    test = () => {
    }
    hold = () => {
        this.setScoreInState(this.state.players[this.state.playerTurn - 1].currentScore, 'globalScore', true)
    }
    newGame = () => {
        this.setState({
            playerTurn: 1,
            players: this.state.players.map((e) =>
                true ? {
                    globalScore: 0, currentScore: 0
                } : e)
        })

    }

    setDicesScore = (diceNum) => {
        this.setScoreInState(diceNum.reduce((acc, cur) => acc + cur), 'currentScore')
        this.setState({
            dices: diceNum,
            diceVisibility: true,
            allEventOn: false,
        }, () => {
            setTimeout(() => {
                this.setState({ diceVisibility: false, allEventOn: true })

            }, 1000)
        })
        if (diceNum[0] === diceNum[1]) {
            this.setState({ playerTurn: this.state.playerTurn === 1 ? 2 : 1 })
            this.setScoreInState(0, 'currentScore')
        }

    }

    setScoreInState = (diceNum, globalOrLocal, deleteCurrent = false) => {
        this.setState({
            players: this.state.players.map((e, i) =>
                i === this.state.playerTurn - 1 ? {
                    ...e, [globalOrLocal]: this.checkScores(e[globalOrLocal], diceNum, globalOrLocal)
                } : e)
        }, () => {
            if (deleteCurrent) {
                this.setState({
                    players: this.state.players.map((e, i) =>
                        i === this.state.playerTurn - 1 ? {
                            ...e, currentScore: 0
                        } : e)
                })
            }
        }, () => {
            let temp = JSON.stringify(this.state.players)
            let temp2 = JSON.parse(temp)
            this.setState({ players: temp2 })
        }
        )
    }

    checkScores = (e, diceNum, globalOrLocal) => {
        if (diceNum === 0) {
            return 0
        } else {
            if (globalOrLocal === 'globalScore') {
                return e + diceNum > this.state.pointsToWin ? this.state.pointsToWin : diceNum === 0 ? 0 : e += diceNum
            } else {
                return e + diceNum > this.state.pointsToWin ? 0 : e += diceNum
            }
        }
    }




    render() {
        this.brr = this.state.players[0] || {};
        return (
            <div>
                <GamePanel
                    diceVisibility={this.state.diceVisibility}
                    injectDice={this.state.dices}
                    setDices={this.setDicesScore}
                    pointsToWin={this.state.pointsToWin}
                    holdPoints={this.hold}
                    newGame={this.newGame}
                    eventOn={this.state.allEventOn}
                    test={this.test}
                />

                <ScoresTable
                    p1Current={this.state.players[0].currentScore}
                    p1Golbal={this.state.players[0].globalScore}
                    p2Current={this.state.players[1].currentScore}
                    p2Golbal={this.state.players[1].globalScore}
                    playerTurn={this.state.playerTurn}
                />
            </div>
        )
    }
}
export default Game;