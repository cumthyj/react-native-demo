/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, Button, ScrollView } from 'react-native';
import CustomButton from './compoments/button';
import FlatListBasics from './compoments/FastList';
import SectionListBasics from './compoments/sectionlist';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};

class AccountText extends Component {
  constructor(props) {
    super(props);
    this.state = { apiResult: [] };
    fetch('http://gps.batdw.com:8693/ApiManage/Credit/LocationAuthorized', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        appId: 'ab34a010-4cc9-496c-a3f8-d52e90ea0d4c',
        payPassword: '123qwe',
        mobile: '13641543457',
        sn: 'GUMVFAd5UBMCQAAWV0NRBAAIT1UXB04dAAgOAUwVVxEIGVUNUARNVBJRBFUMAUNYRgdRTWFZERIDCwVUFgsaU1NHFQBVFh0aDw4WDRtVFgsaU1JCUEYFAAIMV1ZWGQ=='
      })
    }).then((rsp) => rsp.json()).then((responseText) => {
      this.setState({
        apiResult: responseText.Entity //previous =>
      }, () => {

      });

      // let result=JSON.parse(rsp.Entity);
      console.table(this.state.apiResult);
      console.log(typeof (responseText));
    })
  }
  // render() {
  //   let result = JSON.stringify(this.state.apiResult);
  //   return (
  //     <Text>{result}</Text>
  //   );
  // }

  render() {
    let result = JSON.stringify(this.state.apiResult);
    return (
      <View>
        <Text>{this.state.apiResult.MESSAGE}</Text>
        <Text>{result}</Text>
        <View style={style1.viewTest}>
        </View>
      </View>
    );
  }

}


export default class App extends Component<Props> {
  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };


    return (
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.welcome}>111Welcome to React Native!</Text>
          <Text style={styles.instructions}>To get started, edit App.js</Text>
          <Text style={styles.instructions}>{instructions}</Text>
          <Image source={pic} style={{ width: 193, height: 110 }} />
          <AccountText></AccountText>
        </View>
        <CustomButton>
          </CustomButton>
          <FlatListBasics>
          </FlatListBasics>
          <SectionListBasics>
          </SectionListBasics>
      </ScrollView>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: 'blue'
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  pic: {
    backgroundColor: 'red'
  }
});

var style1 = StyleSheet.create({
  viewTest: {
    //border: '1px solid red',
    height: 40,
    borderWidth: 1,
    borderColor: 'red',
  }
})
