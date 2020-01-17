// Code Keypad Component Here
import React, {Component} from 'react'

export default class Keypad extends Component {

    handleKeyStroke = () => {
        console.log("Entering password...")
    }

    render() {
        return (
            <input onKeyUp={this.handleKeyStroke} type="password" />
        )
    }
}