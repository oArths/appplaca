import axios from "axios";

    const api = axios.create({
        baseURL: 'https://wdapi2.com.br/consulta/'
    })

export default api ;

