import axios from "axios";


const instance = axios.create({
   baseURL:"https://mybyrgerproject-default-rtdb.firebaseio.com/"
});


export default instance;