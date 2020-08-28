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

* Instalacion => `npm i axios-middleware` (Actualizar Metro Bundler).
* Importamos el servicio del middleware => `import {Service} from 'axios-middleware'`

# TDD (Test Driven Dev) 👀️

* La idea es que la menor cantidad de bugs posibles lleguen a produccion. Los test ayudan a analizar posibles errores tenidos en cuenta.
* TDD es una metodologia, un flujo de trabajo, esto va a ser aplicado, en este proyecto, para el Front-End. Primero se hace el test (que van a fallar ya que lo que estamos testeando, no existe), lo hacemos pasar y luego refactorizamos.
* Vamos a necesitar 2 herramientas **Jest** (Ya viene por defecto con react native) y **Enzyme** (Test interaccion). Tambien **React Dom**
* **Test rendering** (Render componentes y estilo) y **Tipo interaccion** (Cuando apreto un boton, ¿qué envio?)
* Instalamos Enzyme => `npm i --save-dev enzyme` (Documentacion con React: [https://enzymejs.github.io/enzyme/docs/installation/react-16.html](https://))
* Instalamos React y React DOM => `npm i --save react@16 react-dom@16`
* Instalamos Adapters => `npm i --save-dev enzyme enzyme-adapter-react-16`
* Instamos jest-enzyme (Puente ambas librerias) => `npm i --save-dev jest-enzyme`
* Crear setup-tests.js y copiar el codigo de la siguiente documentacion => [https://enzymejs.github.io/enzyme/docs/guides/react-native.html](https://)
* Agregamos la siguiente linea al array de `package.json` de jest => `"setupFilesAfterEnv": ["<rootdir>/setupTests.js"]`
