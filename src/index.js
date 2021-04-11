import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

import ChangeButton from './component/ChangeButton'

class Main extends React.Component{

    constructor(props){
        super(props);
        //생성자에서 state를 설정 할 수 있음
        this.state = {
            message : "",
        }
    }

    handleClick(newMessage){
        //state를 설정 할 때는 꼭 setState 명령을 써줘야 React가 state 상태 변화를 관리할 수 있음
        this.setState({
            message : newMessage,
        });
    }

    renderButton(message){
        return(
            <ChangeButton name={message} onClick={() => this.handleClick(message)}/>
        );
    }

    render(){
        return(
            <>
                <div className="welcome class">Hello, This is {this.state.message}</div>
                <div>
                    {/* 하나의 컴포넌트에 문자열 값만 다르게 넘겨 줌으로써 컴포넌트 재사용 */}
                    {["React", "HTML", "CSS", "JavaScript"].map(message => (
                        this.renderButton(message)
                    ))}
                </div>
            </>
        );
    }
}


ReactDOM.render(
    <Main/>,
    document.getElementById('root')
);