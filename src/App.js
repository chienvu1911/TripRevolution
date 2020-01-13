import React, { Component } from "react"; 
import Navigation from './components/shared/Navigation';
import Header from './components/shared/Header';

class App extends Component {
    constructor(props) {
        super(props);
    }   

    render() {        
        return (  
            <div>  
                <Navigation />
                <Header />
            </div>  
        );  
    }  
}  
    
export default App;  
