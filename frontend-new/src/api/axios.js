// src/api/axios.js
import dotenv from 'dotenv'
import axios from 'axios';

dotenv.config();

// Backend ka port
const BASE_URL = process.env.BASE_URL ?? 'http://localhost:5000/api' ?? 'https://ims-itej.onrender.com/api' ;

const axiosInstance = axios.create({
    baseURL: BASE_URL,
    withCredentials: true, // Must be true to send/receive cookies
    headers: { 'Content-Type': 'application/json' },
});

const AI_URL  = process.env.AI_URL ?? "http://localhost:8000/api" ?? "https://ims-ai-mcqs.onrender.com/api"

export const aiAPI = axios.create({
    baseURL: AI_URL,
    // withCredentials: true,
    headers: { "Content-Type": "application/json" },
});


export default axiosInstance;
// Yey allow kar raha hai frontend ko backend sey baat karanay mai.
