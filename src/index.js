import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import axios from 'axios';

axios.interceptors.request.use((request)=>{
  if(request.url.includes("signin")){
    return request;
  }
  const token = localStorage.getItem('token');
  request.headers.Authorization = token;
  return request;
});

axios.interceptors.response.use((response)=>{
  console.log(response);
  return response;
},
(error)=>{
  console.log(error);
  return Promise.reject(error);
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
