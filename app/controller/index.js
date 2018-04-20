import axios from 'axios'
var controller = {}
const baseURL = 'http://www.omdbapi.com/?apikey=fbc66c9d';

axios.defaults.headers.post['Content-Type'] = 'application/json';

axios.interceptors.response.use(response => {
  return response;
});

var listApi = [
    {
        url  :  baseURL + '&s=game&plot=full' , 
        name : 'getMovie' , 
        type : 'get'
    } , 
    {
        url  :  baseURL + '&plot=full&i=' , 
        name : 'movieDetail' , 
        type : 'get'
    }
]

var request = ( item ) => {
    return function(options){
        return new Promise((resolve, reject) => {
            console.log(options)
            axios({
                method : item.type , 
                url : item.url + ( options != undefined ? options.id : '' )
            })
            .then(function (response) {
                resolve(response.data)
            })
            .catch(function (error) {
                reject(error)
            });

         })
    }
}


function Iterate(){
    listApi.map((item , key) => {
        controller[item.name] = request(item)
    })
}

Iterate()

export default controller 