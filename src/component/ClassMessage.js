import React, {Component}  from 'react';

//클래스를 이용한 컴포넌트 만들기
class ClassMessage extends Component{
    render(){
        return(
            <li className="welcome class">Hello, This is Class!</li>    
        );
    }
}

export default ClassMessage;

