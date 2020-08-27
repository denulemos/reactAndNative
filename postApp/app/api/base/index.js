import axios from 'axios';

const _path = 'https://pokemon-go1.p.rapidapi.com/pokemon_stats.json';
const _pathInst = 'https://pokemon-go1.p.rapidapi.com/'; //URL Base, la API puede traer varias otras cosas mas alla de pokemones
const _headers = {
	'x-rapidapi-host': 'pokemon-go1.p.rapidapi.com',
	'x-dapidapi-key': '', //Tu Key
	useQueryString: true,
};

class Request {
    constructor(url, baseURL){
        this.url = url;
        this.baseURL = baseURL || _pathInst; //Si no le llega nada, toma _pathInst
        this.request = axios.create({baseURL: this.baseURL , _headers});
    }

    get(){
return this.request({url: this.url});
    }
    getOne(id){
        return this.request({url: this.url +'/'+ id});
    }

    //LA API DE PRUEBA SOLO SOPORTA GET
    post(value){
        return this.request({url: this.url , data: value , method: 'post'});
    }
    put(value, id){
        return this.request({url: this.url +'/'+ id , data:value, method: 'put'});
    }
    delete(id){
        return this.request({url: this.url +'/'+ id , method: 'delete'}); 
    }

}

export default Request;
