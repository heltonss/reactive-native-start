import React, { Component } from 'react';
import { AppRegistry, Text, View } from 'react-native';

class Blink extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isShowText: true
        };

        setInterval(() => {
            this.setState(previousState => {
                return { isShowText: !previousState.isShowText }
            })
        }, 1000)
    }

    render() {
        let display = this.state.isShowText ? this.props.text : ' ';
        return (
            <Text>{display}</Text>
        );
    }
}

export default class BlinkApp extends Component {
    render() {
        return (
            <View>
                <Blink text='I love to blink' />
                <Blink text='Yes blinking is so great' />
                <Blink text='Why did they ever take this out of HTML' />
                <Blink text='Look at me look at me look at me' />
            </View>
        )
    }
}