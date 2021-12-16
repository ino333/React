import { Component } from 'react';

class EventPractice extends Component {
    state = {
        username: '',
        message: ''
    }

    /*
    // 이벤트 핸들러를 화살표 함수 형태로 정의하면
    // 이 부분(정의, 바인딩)을 생략할 수 있다
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    */

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleClick = () => {
        alert(this.state.username + ': ' + this.state.message);
        this.setState({
            username: '',
            message: ''
        });
    }

    handleKeyPress = (e) => {
        if(e.key === 'Enter'){
            this.handleClick();
        }
    }

    render() {
        return (
            <div>
                <h1>이벤트 연습</h1>
                <input
                    type = "text"
                    name = "username"
                    placeholder = "사용자명"
                    value = {this.state.username}
                    onChange = {this.handleChange}
                />
                <input
                    type = "text"
                    name = "message"
                    placeholder = "아무거나 입력해봐"
                    value = {this.state.message}
                    onChange = {this.handleChange}
                    onKeyPress = {this.handleKeyPress}
                />
                <button onClick={this.handleClick}>확인</button>
            </div>
        );
    }
}

export default EventPractice;