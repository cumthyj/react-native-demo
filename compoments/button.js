import React, { Component } from 'react';
import { Button, AppRegistry,StyleSheet, Text, View, Image } from 'react-native';

export default class CustomButton extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <View>
                <Button
                onPress={()=>alert("this is reflection")}
                title="我是按钮"
                >

                </Button>
            </View>
        )
    }
}

//AppRegistry.registerComponent("CustomButton", () => CustomButton);