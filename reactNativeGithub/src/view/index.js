import React from 'react';
import {View, StyleSheet} from 'react-native';

function Viewer(){
    return(
        <View style={styles.container}>

        </View>
    );
}

const styles = StyleSheet.create({
container: {
    height: 45,
    width: '100%', //Tambien se manejan porcentajes (No recomendado)
    backgroundColor: 'green',
}

})

export default Viewer;