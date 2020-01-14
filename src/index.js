import React from "react";  
import ReactDOM from "react-dom"; 
import { BrowserRouter as Router } from "react-router-dom"; 
import { Provider } from 'react-redux';
import store from './redux/store';
import App from "./App.js";
import 'bootstrap/dist/css/bootstrap.css';    
import './styles/common.scss';    

const appContainer = document.getElementById('root');

ReactDOM.render(<Provider>
    <Router store={store}>
        <App />
    </Router>
</Provider>, appContainer);  
