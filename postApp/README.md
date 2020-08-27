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
