import React from 'react';
import ReactDOM from 'react-dom/client';
 import './index.css'
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles/dashboard.css";
import App from './App';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
      <BrowserRouter>
       <App />
      </BrowserRouter>
);

reportWebVitals();
