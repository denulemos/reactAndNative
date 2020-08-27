//PANTALLA ADD USER
//Hooks => Nos proporcionan funcionalidades de react en componentes de funcion, que no poseen estado. Para eso, importo useState
import React, { Component, useState } from 'react';
import {
	View,
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
} from 'react-native';
import axios from 'axios';

//Componente de funcion (Antes era el extends Component)
function CreateUser() {

	//Valor del estado y la funcion que modificara al estado
	const [Email, setEmail] = useState('ejemplo@ejemplo.com'); //Inicializar estado
	const [Pass, setPass] = useState();
	const [Phone, setPhone] = useState('+12345678');

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Email:</Text>
			<TextInput
				style={styles.text}
				value={Email}
				//El valor de nuestro text input se va a guardar en Email
				//onChangeText = {val => this.setState({Email: val})}/>
				onChangeText={val => setEmail(val)}
			/>
			<Text style={styles.title}>Password:</Text>
			<TextInput
				//Realizar Cifrado de password. Aplica formato de puntos.
				secureTextEntry
				style={styles.text}
				value={Pass}
				//onChangeText = {val => this.setState({Pass: val})}/>
				onChangeText={val => setPass(val)}
			/>
			<Text style={styles.title}>Phone:</Text>
			<TextInput
				style={styles.text}
				value={Phone}
				// onChangeText = {val => this.setState({Phone: val})}/>
				onChangeText={val => setPhone(val)}
			/>
			<TouchableOpacity
				style={styles.btn}
				onPress={
					//DEBUG
					() => {
						console.log({ Email, Pass, Phone });
					}
				}>
				<Text style={styles.title}>Submit</Text>
			</TouchableOpacity>
		</View>
    );
    
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
		backgroundColor: '#FFF',
	},
	btn: {
		borderWidth: 1,
		borderColor: '#FFF',
		height: 45, //VALORES EN PIXELES
		width: '100%',
		marginTop: 100,
		backgroundColor: '#B33771',
		justifyContent: 'center',
		alignItems: 'center',
	},
});

export default CreateUser;
