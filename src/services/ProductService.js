import axios from "axios";
import { PRODUCT_URL_PREFIX } from "../constants/ApiConstants";

export function saveProduct(product){
    // return axios.post("http://127.0.0.1:9000/products",product);
    return axios.post(PRODUCT_URL_PREFIX,product);
}

export function fetchAllProducts(){
    // return axios.get(PRODUCT_URL_PREFIX);
    return axios.get("http://127.0.0.1:9000/products");
}

export function deleteProduct(id){
    return axios.delete(`${PRODUCT_URL_PREFIX}/${id}`);
}