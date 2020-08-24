import React, {Component} from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';

class Button extends Component {
    render(){ 
        //Traer de this.props el label del boton y la accion a realizar
        const{label, action} = this.props;

        return(
            <TouchableOpacity style={styles.btn} onPress={action}>
            <Text style={styles.btnText}>{label}</Text>
          </TouchableOpacity>
        );
    }
}

//Otra manera de recibir los props
// function Button(props){
//     const{label, action} = props;
//     return (
//         <TouchableOpacity style={styles.btn} onPress={action}>
//         <Text style={styles.btnText}>{label}</Text>
//       </TouchableOpacity>
//     );
// }

const styles = StyleSheet.create({
   
    btn: {
      width: 50,
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#ff7675',
    },
    btnText: {
      fontSize: 25,
      color: '#d63031',
      fontWeight: 'bold',
    },
    
  });
  
  export default Button;