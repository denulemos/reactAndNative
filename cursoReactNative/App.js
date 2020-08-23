/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

/* Importamos componentes nuestros con su path relativo*/
import Componente1 from './src/Componente1';
import ComponenteBoton from './src/ComponenteBoton';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App: () => React$Node = () => {
  return (
    //Si tengo mas de un componente, debo si o si rodearlos con View
    //Estilo de la View
    <View style={{justifyContent: 'center' , alignItems: 'center', flex: 1}}>
    <Text>
    <Componente1
      //Le mandamos las propiedades (props), accesibles dentro del componente, puede ser numero, objeto, string, etc
      text="Hola soy una props"
    /></Text>
<Text>
    <Componente1
    //Podemos agregar el mismo componente pero con distintas props
    text="Soy el componente 1 pero repetido"/></Text>

    <ComponenteBoton/>
    </View>
  );
};

const styles = StyleSheet.create({});

export default App;
