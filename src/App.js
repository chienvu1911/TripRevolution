import React, { Component } from "react"; 

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: this.props.isLoading
        }
    }

    UNSAFE_componentWillMount() {
        console.log('componentWillMount Header running after initial and before first render');
    }
    
    componentDidMount() {
        console.log('componentDidMount Header running after first render and mout component success');
    }

    render() {
        console.log('render header');
        
        return (  
            <div>  
                <p>IsLoading: {this.state.isLoading}</p>
            </div>  
        );  
    } 
}

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true
        }
    }
    
    UNSAFE_componentWillMount() {
        console.log('componentWillMount running after initial and before first render');
    }
    
    componentDidMount() {
        console.log('componentDidMount running after first render and mout component success');
    }
    
    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate running first when state change');
        return true;
    }
    
    UNSAFE_componentWillUpdate(nextProps, nextState) {
        console.log('componentWillUpdate running after check update by shouldComponentUpdate');
    }
    
    componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate running after render');
        console.log('state update successfully');
    }
    
    UNSAFE_componentWillReceiveProps(nextProps) {
        console.log('componentDidUpdate running first when receive a new props');
    }
    
    componentWillMount() {
        console.log('You should not call setState() in componentWillUnmount() because the component will never be re-rendered. ');
    }

    onHandleUpdateState = () => {
        this.setState({
            isLoading: false
        })
    }

    render() {
        console.log('render app');
        return (  
            <div>  
                <Header title="zoro" />
                <button onClick={this.onHandleUpdateState}>Stop loading</button>  
            </div>  
        );  
    }  
}  
    
export default App;  
