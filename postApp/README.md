## Estructura del Proyecto 🚀️ (PostApp)

* **Tests:** Contenera todos los tests de la aplicacion, la crea el CLI de React native.
* **Mocks:** Para poner datos de prueba en nuestra aplicacion, como datos falsos para llamadas a la API.
* **App:** Va a contener todo lo relacionado con la aplicacion. Muchos folders.**Esta carpeta contenera los siguientes folders =>**
* **API:** Configuraciones de librerias, etc.. (Dentro de app)
* **Assets:** Iconos, estilos, imagenes.
* **Components**: Componentes reusables de la aplicacion.
* **Settings:** Configs. de la aplicacion. Identificadores de selects, etc..
* **Navigator:** Configuracion de react navigation.
* **Libs:** Archivos JS con funciones custom.
* **Views:** Cada modulo, o pantallas para trabajar. (Login, Home, etc..).
* **Store:** Configuracion de redux.

# Axios 🚀️

* Instalamos Axios => `npm i axios`.
* Apagamos el Metro Bundler en el caso de tenerlo corriendo.
* Importamos axios => `import axios from 'axios'`.
* Volver a correr Metro Bundler.
* Ejemplo axios con Pokemon Go RapidApi
  
  ```
  componentDidMount(){
  
  //CONSTANTES
  const _path = 'https://pokemon-go1.p.rapidapi.com/pokemon_stats.json';
  const _pathInst = 'https://pokemon-go1.p.rapidapi.com/'; //URL Base, la API puede traer varias otras cosas mas alla de pokemones
  const _headers = {
  "x-rapidapi-host": "pokemon-go1.p.rapidapi.com",
  "x-dapidapi-key": "cd14fb2c68msh0d4d25d53c61133p1b6c38jsn5e7d7fb7a9f7",
  "useQueryString" : true,
  };
  
  //PETICIONES GET
  axios.get(_path ,{
  headers: _headers
  //Esto devuelve una promise
  }).then(res1 => console.log({res1}));
  
  
  //OTRA SINTAXIS DE GET
  axios({
  method: 'get', //Si dejo esto vacio, por defecto, es GET
  headers: _headers,
  url: _path
  }).then(res2 => console.log({res2}));
  
  //SINTAXIS MAS RECOMENDADA, con instancias de Axios
  //axios.create nos crea una instancia de axios
  const instAxios = axios.create({
  baseURL: _pathInst, //Path base
  headers: _headers
  });
  
  instAxios({
  method: 'get',
  url: 'pokemon_stats.json' //hago que la url base apunte acá
  }).then(res3 => console.log({res3}));
  }
  ```

# Axios Middleware 🚀️

* Instalacion =>`npm i axios-middleware` (Actualizar Metro Bundler).
* Importamos el servicio del middleware =>`import {Service} from 'axios-middleware'`

# Firebase 🚀️

* Instalamos el cliente de Firebase para React Native =>`npm install --save @react-native-firebase/app`.
* Registramos a la App desde firebase. (Al nombre del proyecto, debemos ponerle com.(nombre), en este caso, es com.postapp).
* Instalamos libreria de auth =>`npm install --save @react-native-firebase/auth`
* Importar tu google-services.json, si no el proyecto no funcionara.

# Navegacion 🚀️

* Stack => Colocar las pantallas en una pila, podemos ir regresando de pantalla en pantalla.
* Drower => Es un menu (boton, menu lateral, etc) que tiene una serie de botones que nos posiciones en otra pantalla como tal. Tambien suelen tener un log out en si.
* Tabs => Es el mas comun de todos, es un menu inferior (android) o superior (iOS), a traves de ese menu, navegamos entre pantallas. 
* Libreria de **React Navigation**



