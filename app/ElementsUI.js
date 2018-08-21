import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
//import { Constants } from 'expo';
import { Button } from 'react-native-elements'; // 0.19.1

export default class RneDemo extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Button
          raised
          icon={{name: 'home', size: 32}}
          buttonStyle={{backgroundColor: '#ff4f00', borderRadius: 10}}
          textStyle={{textAlign: 'center'}}
          title={`Welcome to\nReact Native Elements`}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    //paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  }
});