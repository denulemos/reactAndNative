import React , {useEffect} from 'react';
import {
    View
} from 'react-native';

import Button from '../../components/button';

import {styles} from './styles';

const Posts = () => {

    //USO DEL USEEFFECT 
    //Recibe un parametro, pero si no recibe nada, por defecto, funciona como un ComponentDidMount
    useEffect(() => {
        console.log('Hola! Actuo como un componentDidMount');
    })

    return (
        <View style={styles.container}>
            <Button title="Usar" action = {() => {

            }} />
        </View>
    );
}

export default Posts;