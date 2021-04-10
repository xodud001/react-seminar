import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import './index.css'

function HookMessage(props){
    return(
        <li className="welcome hook">Hello, This is Hook!</li>    
    );
}

class ClassMessage extends Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <li className="welcome class">Hello, This is Class!</li>    
        );
    }
}

const Main = (props) =>{
    return(
        <>
            <div className="welcome class">Hello, This is Main</div>
            <ul>
                <HookMessage/>
                <ClassMessage/>
            </ul>
        </>
    );
}

ReactDOM.render(
    <Main/>,
    document.getElementById('root')
);