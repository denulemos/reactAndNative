import React , {useEffect} from 'react';
import {
    View
} from 'react-native';

import Button from '../../components/button';

import {styles} from './styles';

const Posts = () => {

    const [state, setState] = useState(0);

    //USO DEL USEEFFECT 
    //Recibe un parametro, pero si no recibe nada, por defecto, funciona como un ComponentDidMount
    useEffect(() => {
        console.log('Update');
    });

    useEffect(() => {
        console.log('Mount');
    }, []);

    useEffect(() => {
        console.log('Update State');
    },[state] )

    
    return (
        <View style={styles.container}>
            <Button title="Usar" action = {() => {
setState(1)
            }} />
        </View>
    );
}

export default Posts;