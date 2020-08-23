/*Importar librerias necesarias */
import React from 'react';

/*Librerias de react native*/
import {Text, ActivityIndicator, View} from 'react-native';

/*Los componentes son clases. Todos los componentes extienden de React.Component */

export default class Componente1 extends React.Component {
  //Constructor del componente
  constructor(props) {
    super(props);
    //Estado componente
    this.state = {};
  }

  //Se va a montar
componentWillMount(){
console.log("Will Mount");
}
//Ya montado
componentDidMount(){
console.log("Montado");
}
//El componente se va a desmontar
componentWillUnmount(){
    console.log("Se va a desmontar");
}
  //Metodo render, especifica que va a mostrar el componente cuando sea implementado
  //Mostramos tambien el props que le estamos pasando desde app.js
  render() {
    return (
      <View>
        <Text>Texto de prueba para nuestro componente</Text>
        <Text>{this.props.text}</Text>
      </View>
    );
  }
}
