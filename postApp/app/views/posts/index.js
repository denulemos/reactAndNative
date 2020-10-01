import React , {useEffect} from 'react';
import {
    View
} from 'react-native';

import Button from '../../components/button';

import {styles} from './styles';

const Posts = () => {

    const arr =[
        {name : 'lala'},
        {name : 'lala'},
        {name : 'lala'},
        {name : 'lala'},
        {name : 'lala'},
        {name : 'lala'},
        {name : 'lala'},
        {name : 'lala'},
        {name : 'lala'},
    ]
    //const [state, setState] = useState(0);

    
    return (
        <View style={styles.container}>
           <Button title="count" action={() => {
               setCount(1 + count)
           }} />
        </View>
    );
}

export default Posts;