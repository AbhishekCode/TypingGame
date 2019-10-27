import React, { Component } from 'react';
import styled from 'styled-components'
import KillObject from './KillObject';
import words from 'an-array-of-english-words'
import ScoreLine from './ScoreLine';
import GameOver from './GameOver';
import TextInput from './TextInput';
import { Fireworks } from 'fireworks/lib/react'


class Game extends Component {
    tarageObjectsArray = []
    interval = 1500
    state = {
        update: false,
        KillObjectCount: 5,
        life: 10,
        score: 0,
        showFirework: false
    }
    componentDidMount() {
        this.spawnKillObject()
        setInterval(() => {
            this.spawnKillObject()
        }, this.interval);
    }

    updatePosition = (position, text) => {
        if (position > window.innerHeight) {
            const index = this.tarageObjectsArray.findIndex(x => x.text === text);
            if (index > -1) {
                this.tarageObjectsArray.splice(index, 1);
                this.setState({ update: !this.state.update, life: this.state.life - 1 })
            }
        }
    }

    checkAndDestroyIfMatch = (enteredValue) => {
        const index = this.tarageObjectsArray.findIndex(x => x.text === enteredValue);
        if (index > -1) {
            this.tarageObjectsArray.splice(index, 1);
            this.setState({ update: !this.state.update, life: this.state.life - 1, score: this.state.score + enteredValue.length, showFirework: true })
            setTimeout(() => {
                this.setState({ showFirework: false })
            }, 1000);
        }
    }

    spawnKillObject = () => {
        let newobject = {
            text: words[Math.floor(Math.random() * words.length)],
            updatePosition: this.updatePosition,
            left: Math.random() * ((window.innerWidth - 100) - 50) + 50
        }

        this.tarageObjectsArray.push(newobject)
        this.setState({ update: !this.state.update })
    }

    render() {
        let fxProps = {
            count: 1,
            interval: 1000,
            colors: ['#cc3333', '#4CAF50', '#81C784'],
            calc: (props, i) => ({
                ...props,
                x: window.innerWidth / 2,
                y: window.innerHeight / 2
            })
        }
        return (
            <GameContainer>
                {(this.state.showFirework || this.state.life < 0) && <Fireworks {...fxProps} />}
                <ScoreLine life={this.state.life} score={this.state.score}>   </ScoreLine>
                {
                    this.state.life > -1 && this.tarageObjectsArray.map(item => <KillObject key={item.text} {...item}></KillObject>)
                }
                {
                    this.state.life > -1 && <TextInput onEnter={this.checkAndDestroyIfMatch}></TextInput>
                }
                {
                    this.state.life < 0 && <GameOver score={this.state.score} />
                }
            </GameContainer>
        )
    }
}


export default Game


const GameContainer = styled.div`
   display: flex;
   flex:1;
   flex-direction :column;
   min-height: ${window.innerHeight}px;
   background-color: light;
`;