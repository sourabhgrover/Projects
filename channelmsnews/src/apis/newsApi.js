import axios from "axios";

const instance = axios.create(
    {
        baseURL: "https://newsapi.org/v2/"
    }
);



export default instance;


