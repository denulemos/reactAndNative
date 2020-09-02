// Dependencies
import React, { Component } from 'react';
import {
	View, TextInput, TouchableOpacity,
	Text, StyleSheet, Image,
} from 'react-native';

import auth from '@react-native-firebase/auth';
import userImg from '../../assets/iconos/usuario.png';


export const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#34495e',
		paddingVertical: 20,
		paddingHorizontal: 30,
	},
	subcontainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
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
		height: 45,
		width: '100%',
		paddingHorizontal: 10,
		color: '#FFF',
	},
	btn: {
		borderWidth: 1,
		borderColor: '#FFF',
		height: 45,
		width: '100%',
		marginTop: 40,
		justifyContent: 'center',
		alignItems: 'center',
	},
	img: {
		width: 100,
		height: 100,
		tintColor: '#FFF', //Elegimos el color de la imagen
	},
});

class Login extends Component {
	constructor(props) {
		super(props);

		//Inicializacion de estados de campos de login
		this.state = {
			Email: null,
			Password: null,
		};
	}
	componentDidMount() {

        //CHEQUEO DE CONFIGURACIONES FIREBASE AUTH
         auth()
         //Crea usuario de test 
		 	.createUserWithEmailAndPassword('sarah.lane@gmail.com', 'SuperSecretPassword!')
		 	.then(() => {
				console.log('User account created & signed in!');
		 	})
			.catch(error => {
				if (error.code === 'auth/email-already-in-use') {
				console.log('That email address is already in use!');
		 		}

			if (error.code === 'auth/invalid-email') {
				console.log('That email address is invalid!');
				}

		 		console.error(error);
	 	});
	}

	render() {
		const { Email, Password } = this.state; //Traemos las inicializaciones desde el state
		return (
			<View style={styles.container}>
				<View style={styles.subcontainer}>
					<Image
					//source={uri}
						source={userImg}
						style={styles.img}
					/>
				</View>

				<View style={styles.subcontainer}>
					<Text style={styles.title}>Email</Text>
					<TextInput
						style={styles.text}
						value={Email}
						onChangeText={em => this.setState({ Email: em })} //Asignar lo que escribo a la variable
					/>
					<Text style={styles.title}>Password</Text>
					<TextInput
						style={styles.text}
						value={Password}
						onChangeText={psw => this.setState({ Password: psw })}
						secureTextEntry
					/>

					<TouchableOpacity
						style={styles.btn}
						onPress={() => {
							this.props.navigation.navigate('CreateUser', { ID: 1 });
							// auth().signInWithEmailAndPassword(Email, Password)
							// 	.then(usr => this.props.navigation.navigate('CreateUser', { ID: 1 })) //Se devuelve una promesa
							// 	.catch(err => console.log({ err }));
						}}
					>
						<Text style={styles.title}>Login</Text>
					</TouchableOpacity>
				</View>
			</View>
		);
	}
}

export default Login;