//PANTALLA ADD USER

import React, { Component } from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';

class CreateUser extends Component {
	constructor(props) {
		super(props);
		this.state = {
			//inicializo inputs
            Email: null,
            Pass: null,
            Phone: null,
		};
	}

	render() {
        const {Email, Pass, Phone} = this.state;
		return (
			<View style={styles.container}>
				<Text style={styles.title}>Email:</Text>
				<TextInput style={styles.text} 
                value= {Email}
                //El valor de nuestro text input se va a guardar en Email
                onChangeText = {val => this.setState({Email: val})}/>
                <Text style={styles.title}>Password:</Text>
				<TextInput style={styles.text} 
                value= {Pass}
                onChangeText = {val => this.setState({Pass: val})}/>
                <Text style={styles.title}>Phone:</Text>
				<TextInput style={styles.text} 
                value= {Phone}
                onChangeText = {val => this.setState({Phone: val})}/>

                <TouchableOpacity style={styles.btn}
                onPress={
                    //DEBUG
                    ()=> {
                        console.log({Email, Pass, Phone})
                    }
                }>
                    <Text style={styles.title}>Submit</Text>
                </TouchableOpacity>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1, //Ocupe toda la pantalla
		backgroundColor: '#6F1E51',
		paddingVertical: 20,
		paddingHorizontal: 30,
	},
	title: {
		color: '#FFF',
		fontSize: 16,
		fontWeight: 'bold',
		marginVertical: 10,
	},
	text: {
		borderWidth: 1,
		borderColor: '#FFF',
		height: 45, //VALORES EN PIXELES
        width: '100%',
        paddingHorizontal: 10, 
        backgroundColor: '#FFF'
    },
    btn:{
        borderWidth: 1,
		borderColor: '#FFF',
		height: 45, //VALORES EN PIXELES
        width: '100%',
        marginTop:100,
        backgroundColor: '#B33771',
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default CreateUser;
