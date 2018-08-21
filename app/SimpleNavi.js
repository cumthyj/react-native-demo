import { StackNavigator } from 'react-navigation';
import React, { Component } from 'react';
import { Button, View ,Text} from 'react-native';

class MainScreen extends React.Component {
    static navigationOptions = {
        title: 'Welcome',
    };
    render() {
        const { navigate } = this.props.navigation;
        return (
            <Button
                title="Go to Jane's profile"
                onPress={() =>
                    navigate('Profile', { name: 'Jane' })
                }
            />
        );
    }
}

class ProfileScreen extends React.Component {
    static navigationOptions = {
        title: 'Profile',
    };
    render() {
        const { navigate } = this.props.navigation;//解构
        //const  params  = this.props.navigation.state.params;//解构
        const {state, setParams} = this.props.navigation;
        const {params} = state;
        //console.log(state);
        return (
            <View>
                <Text style={{fontSize:23}}>
                    {params.name}
                </Text>
            </View>
        );
    }
}

const App = StackNavigator({
    Main: { screen: MainScreen },
    Profile: { screen: ProfileScreen },
});

export default App