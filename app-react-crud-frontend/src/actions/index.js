import axios from "axios";

export const client = axios.create({
    baseURL: 
        "http://localhost:9999", // Run on docker
    // "http://192.168.99.100:9999", // Run on docker terminal
    headers: {
        "Content-Type": "application/json"
    }
})