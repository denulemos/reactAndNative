import React from 'react';
import {Text, ActivityIndicator, View, TouchableOpacity} from 'react-native';

/*Los componentes son clases. Todos los componentes extienden de React.Component */

export default class ComponenteBoton extends React.Component {
  //Constructor del componente
  constructor(props) {
    super(props);
    this.state = {
      numero: 1,
    };

    //Si queremos que el metodo tenga algun tipo de relacion con el estado actual, le declaramos el contexto actual
    //Acciones Bind
    this.onPress = this.onPress.bind(this);
  }

  //Metodo del boton
  onPress() {
    //Con el bind de arriba, podemos usar el "this"
    this.alerta();
    //Queremos que numero (del state) se incremente por click
    this.setState({
        //Actualiza el numero del state y pasa de vuelta por el render
      numero: this.state.numero + 1,
    });
  }

  alerta() {
    alert('Hiciste click!! y se sumo un numero');
  }

  render() {
    return (
      //Creamos un BOTON que baja de opacidad en click, junto con que metodo queremos que ejecute en el click
      <TouchableOpacity onPress={this.onPress}>
        <Text>Clickeame! {this.state.numero}</Text>
      </TouchableOpacity>
    );
  }
}
