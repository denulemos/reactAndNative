# React Native 🚀️ 

## Qué hay en este repositorio? 😕 

* reactNativeGithub => Primer proyecto base
* contador => Aplicacion basica, un contador de numeros mediante botones.

**¿Qué es React Native y como funciona?**

* Un mismo codigo fuente puede exportar a iOS y Android.
* Es una tecnologia desarollada por Facebook con mucha comunidad detras de la misma.
* Funciona por componentes, son "pedacitos" de la aplicacion. Podemos reutilizar componentes.
* Para iOS necesito si o si XCode para buildear.
* Se trabaja con JSX (Extension de JS creada por Facebook) y EcmaScript6.

**Uso JSX**

* Podemos crear componentes de la siguiente forma: `const Componente = <p> Hola! </p>`
* Y referirlo de la siguiente forma: `<Componente/>`
* Es el uso de componentes a traves de tags

## Instalacion (Windows) 🎉️ 

* Instalar NVM para el manejo de versiones
* Instalar JDK. Configurar JAVA_HOME en las variables de entorno del sistema.
* Instalar Android Studio (Y configurar un emulador de dispositivo)
* Instalar node y npm => `nvm install --lts`
* Instalar react-native-cli => `npm install -g react-native-cli`
* Crear proyecto => `react-native init reactNativeGithub`
* Correr Metro (Servidor local) =>` react-native start`
* Correr aplicacion (Con telefono conectado o emulador corriendo) => `react-native run-android`
* Personalmente, para que el comando `run-android` me anduviera correctamente, tuve que abrir el proyecto en Android Studio y dejar que Gradle se configure solo junto con el SDK. **Recomiendo hacer el build en Android Studio, al menos una sola vez.**
* `npm i prop-types` => Instalar libreria prop-types, para manejar tipos de datos

## Estructura 👀️ 

* __ tests __ : Carpeta de UnitTesting
* Carpetas android~~~~ y iOS con el codigo nativo de cada uno.
* index.js : Entry point de la aplicacion

## Componentes 👀️ 

* Son "pedacitos" de la aplicacion.
* `<View></View>` posee una similutud con los div de HTML.
* Los componentes dentro del render() deben ir SI O SI encapsulados. No puede devolver mas de un componente al mismo nivel. `<View> </View> <Hola> </Hola>` = No es correcto. `<View><Hola/></View>` = Si es correcto
* Se recomienda ver **Flexbox** para poner mejores estilos a nuestros componentes.
* Al crear un componente siempre se deben hacer los siguientes imports

``   import React from 'react';``

``   import {View, StyleSheet} from 'react-native';``

* Para que el componente pueda ser importado por otros componentes, debe ser exportado

`   export default nombreComponente`

* **Props:** Se usan para pasarle informacion de un componente a otro.
* Un componente hijo (importado), idealmente, no podria modificar el estado del componente padre (el que lo importa). Si necesito hacerlo, le mando una accion al hijo desde el padre, donde se modifique el estado. (caso suma() y resta() de contador)
* Un componente pose **fases** desde que se monta hasta que se va, a esto se le dice **Ciclo de vida** y pueden ser manejados por React.
  Montaje => Actualizacion => Desmontaje.
  Constructor => ComponentwillMount (Util para, por ejemplo, obtener la medida de la pantalla antes de cualquier otra cosa) =>Render (no puedo hacer this.setState en el mismo, ya que setState llama al render, y se daria un loop infinito) => ComponentDidMount (Util para peticiones asincronas, aunque puede llevar a problemas de performance ya que debe llamar de vuelta al Render(), aca si se puede usar el setState).
