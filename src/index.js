import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import ReactDOM from "react-dom/client";
import "./index.css";
import axios from "axios";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

axios.interceptors.request.use((request) => {
  if (request.url.includes("signin")) {
    return request;
  }
  const token = localStorage.getItem("token");
  request.headers.common.Authorization = `Bearer ${token}`;
  return request;
});

axios.interceptors.response.use(
  (response) => {
    console.log(response);
    return response;
  },
  (error) => {
    console.log(error);
    const status = error.response?.status || 500;
    if (status === 401) {
      window.location = window.location.protocol + "//" + window.location.host;
    } else {
      return Promise.reject(error); // Delegate error to calling side
    }
  }
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
