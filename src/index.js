import React from "react";  
import ReactDOM from "react-dom"; 
import { BrowserRouter as Router } from "react-router-dom"; 
import App from "./App.js";
import 'bootstrap/dist/css/bootstrap.css';    
import './styles/common.scss';    

const appContainer = document.getElementById('root');

ReactDOM.render(<Router><App /></Router>, appContainer);  
