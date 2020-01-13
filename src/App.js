import React, { Component } from "react";
import Navigation from './components/layout/Navigation';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Routes from './routes/Routes'; 

class App extends Component {
    constructor(props) {
        super(props);
    }   

    render() {        
        return (  
            <>
              <Navigation />
              <Header /> 
              <Routes />  
              <Footer />
            </>  
        );  
    }  
}  
    
export default App;  
