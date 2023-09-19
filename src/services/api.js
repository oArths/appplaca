import axios from "axios";
    // o Axios faz a funçao de requisição da API, para isso é necessario ter uma url base
    const api = axios.create({
        baseURL: 'https://wdapi2.com.br/consulta/'
    })

export default api ;

