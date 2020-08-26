# React Native 🚀️

Apuntes basados en el siguiente curso de Youtube: [https://www.youtube.com/watch?v=xQpHaKWHdFI&list=PLUlw6638d2QZFbQfC3sB5mKWJUWr2HEkc&index=14](https://www.youtube.com/watch?v=xQpHaKWHdFI&list=PLUlw6638d2QZFbQfC3sB5mKWJUWr2HEkc&index=14)

## Qué hay en este repositorio? 😕

* reactNativeGithub => Primer proyecto base
* contador => Aplicacion basica, un contador de numeros mediante botones.
* PostApp => Una pequeña aplicacion funcional de prueba

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
  Constructor => **ComponentwillMount** (Util para, por ejemplo, obtener la medida de la pantalla antes de cualquier otra cosa) *DEPRECADO 👎*  UNSAFE => **Render** (no puedo hacer this.setState en el mismo, ya que setState llama al render, y se daria un loop infinito) => **ComponentDidMount** (Util para peticiones asincronas, aunque puede llevar a problemas de performance ya que debe llamar de vuelta al Render(), aca si se puede usar el setState).
* El componente padre NO termina de renderizarse hasta que no se terminen de renderizar todos sus hijos.

  ## Ciclo de vida de Actualizacion 👀️
* **componentWillReceiveProps** : Se ejecuta cuando hay actualizacion de alguna prop, o se modifica alguna prop.
* **shouldComponentUpdate:** Nos permite decidir si debemos ejecutar de vuelta, o no, el render. Muestra con que valores se va a realizar la actualizacion.
* **componentWillUpdate:** Ya esta a punto de correr el render(). *DEPRECADO*  👎 UNSAFE
* **componentDidUpdate:** Luego del renderizado. *DEPRECADO 👎 * UNSAFE
* **componentWillUnmount:** El componente esta a punto de ser desmontado de la pantalla. No existe un **didUnmount** ya que el componente no existe mas, no se puede hacer mas nada con el mismo.

## Pure Component 👀️

* Al importarla, en lugar de extender de Component, extendemos de PureComponent.
* Nos permite trabajar el "shouldcomponentupdate" (activar render o no dependiendo de valor del counter)
* Optimizamos los componentes que necesitan comprobar si realmente el render() es necesario
* Reemplaza lo siguiente:

```
   shouldComponentUpdate(nextProps, nextState) {
     const {counter} = this.state;
     //Si el valor a cambiar es el mismo valor del actual, no renderizar
     if (nextState.counter === counter) return false;
     //De lo contrario, renderizar
     return true;
  }
```

## Componentes Fragmentados 👀️

* Los componentes deben devolverse dentro de un solo < View> </ View>, pero a veces se necesitan retornar 2 componentes sin un contenedor en comun. Para esto esta el Fragment
* Importamos fragment junto con React => ``import React, {Component, Fragment} from 'react';``
* Usamos fragment en lugar de View, para no luchar con los estilos =>

```
<Fragment>
            <TouchableOpacity style={styles.btnreset} onPress={reset}>
            <Text style={styles.btnText}>Reset</Text>
          </TouchableOpacity>
            <TouchableOpacity style={styles.btnreset} onPress={reset}>
            <Text style={styles.btnText}>+ 10</Text>
          </TouchableOpacity></Fragment>
```

* Tambien se puede declarar de forma "anonima" de la siguiente manera => `<> </>`

## Estructura del Proyecto 🚀️ (PostApp)

* **Tests:** Contenera todos los tests de la aplicacion, la crea el CLI de React native.
* **Mocks:** Para poner datos de prueba en nuestra aplicacion, como datos falsos para llamadas a la API.
* **App:** Va a contener todo lo relacionado con la aplicacion. Muchos folders.
  **Esta carpeta contenera los siguientes folders =>**
* **API:** Configuraciones de librerias, etc.. (Dentro de app)
* **Assets:** Iconos, estilos, imagenes.
* **Components**: Componentes reusables de la aplicacion.
* **Settings:** Configs. de la aplicacion. Identificadores de selects, etc..
* **Navigator:** Configuracion de react navigation.
* **Libs:** Archivos JS con funciones custom.
* **Views:** Cada modulo, o pantallas para trabajar. (Login, Home, etc..).
* **Store:** Configuracion de redux.
