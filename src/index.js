import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

import {HookMessage} from './component/HookMessage'
import ClassMessage from './component/ClassMessage'

class Main extends React.Component{
    
    render(){
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
}


ReactDOM.render(
    <Main/>,
    document.getElementById('root')
);