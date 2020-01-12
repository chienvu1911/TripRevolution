import React, { Component } from "react"; 

function Header(props) {
    return(
        <p>{props.title}</p>
    )
}

class App extends Component {  
    render() {  
        return (  
            <div>  
                <Header title="zoro" />  
            </div>  
        );  
    }  
}  
    
export default App;  
