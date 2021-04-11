import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import './index.css'


//Hook을 이용한 컴포넌트 만들기
function HookMessage(props){
    return(
        <li className="welcome hook">Hello, This is Hook!</li>    
    );
}

// 화살표 함수를 이용한 컴포넌트 만들기
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

//클래스를 이용한 컴포넌트 만들기
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



ReactDOM.render(
    <Main/>,
    document.getElementById('root')
);