import React, {Component} from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
class Button extends Component {
  // static propTypes ={
  //   //Asegurarme que voy a recibir el tipo de dato correcto
  //   label:  PropTypes.string,
  //   action: PropTypes.func
  // }

  //Esto se ejecuta cuando recibimos props o hacemos una actualizacion de un prop de un componente a otro
  componentWillReceiveProps() {
    console.log('Props');
  }

  //Se usa cuando hay alguna actualizacion de algun estado o prop que estamos mandando. Este metodo devuelve un booleano, ya que gracias a este resultado, decido si ejecutar o no el render()
  shouldComponentUpdate(nextProps, nextState) {
    console.log({nextProps, nextState});
    return true;
  }

  //Lo mismo que el WillMount, nos ayuda a resetar valores globales. Justo antes del renderizado.
  componentWillUpdate() {
    console.log('Component will update');
  }

  //Luego del renderizado. Nos sirve para gestionar librerias, si lo necesitamos. Recibe 2 parametros, los valores anteriores antes de la actualizacion
  componentDidUpdate(prevProps, prevStates){
    console.log('Component Did update');
  }

  //Cada vez que el componente vaya a dejar de aparecer. Se usa para setear estados globales de la aplicacion.
  componentWillUnmount(){
    console.log("Will Unmount");
  }

  render() {
    //Traer de this.props el label del boton y la accion a realizar
    const {label, action} = this.props;

    return (
      <TouchableOpacity style={styles.btn} onPress={action}>
        <Text style={styles.btnText}>{label}</Text>
      </TouchableOpacity>
    );
  }
}

// function Button(props){
//         //Traer de this.props el label del boton y la accion a realizar
//         const{label, action} = this.props;

//         return(
//             <TouchableOpacity style={styles.btn} onPress={action}>
//             <Text style={styles.btnText}>{label}</Text>
//           </TouchableOpacity>
//         );

// }

//Valores de propiedades por defecto, en el caso de no mandar nada desde el padre
Button.defaultProps = {
  label: 'Button',
  action: () => null,
};

//Una forma de usar los proptypes
Button.proptypes = {
  //Es obligatorio, no acepta un Undefined
  label: PropTypes.string.isRequired,
  action: PropTypes.func,
};

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
