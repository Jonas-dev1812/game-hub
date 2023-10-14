import Constans from '../core/const';
import axios from 'axios';

export default axios.create({
    baseURL: Constans.BaseURL,
    params:{
        key: Constans.apikey
    }
})