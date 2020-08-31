import React, {Component} from 'react';
import {View, TextInput, TouchableOpacity, Text, StyleSheet} from 'react-native';

export const styles = StyleSheet. create({
    container: {
        flex: 1,
        backgroundColor: 'blue',
    },
    box: {
        flex: 1,
        backgroundColor: 'red',
    }
});

class Login extends Component{
    render(){
        const {cont = 'container'} = this.props;
        return(
            <View style={styles[cont]}>
                <Text>Email</Text>
                <TextInput/>
                <Text>Password</Text>
                <TextInput/>
                <TouchableOpacity/>
            </View>
        );
    }
}

export default Login;