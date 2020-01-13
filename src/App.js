import React, { Component } from "react"; 
import Navigation from './components/shared/Navigation';
import Header from './components/shared/Header';
import Footer from './components/shared/Footer';
import ContactForm from './components/ContactForm';

class App extends Component {
    constructor(props) {
        super(props);
    }   

    render() {        
        return (  
            <div>  
                <Navigation />
                <Header />
                <ContactForm />
                <Footer />
            </div>  
        );  
    }  
}  
    
export default App;  
