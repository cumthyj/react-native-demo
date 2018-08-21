import React, { Component } from 'react';
import { Text, View, TextInput } from 'react-native';

export default class PizzaTranslator extends Component {
    constructor(props) {
        super(props);
        this.state = { text: "" };
    }

    render() {
        return (
            <View>
                <TextInput
                style={{height:50}}
                placeholder="输入需要翻译的文字"
                onChangeText={text=>this.setState({text})}
                >
                </TextInput>
                <Text 
                style={{padding:10,fontSize:40}}
                >
                    {this.state.text.split(' ').map(word=>word&&'🍕').join(' ')}
                </Text>
            </View>
        );
    }
}