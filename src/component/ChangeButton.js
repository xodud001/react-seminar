import React, {Component}  from 'react';

class ChangeButton extends Component{
    render(){
        return(
            // 컴포넌트를 다루기 위해 key값을 부여할 수 있음
            // onClick에 버튼 이벤트를 달 수 있음
            // this.props로 부모 컴포넌트에서 넘어온 데이터를 사용할 수 있음
            <button key={this.props.name} onClick={this.props.onClick}>
                {this.props.name}
            </button>
        );
    }
}

export default ChangeButton;