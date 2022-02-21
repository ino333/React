import { Component } from 'react';

class LifeCycleSample extends Component {
    state = {
        number: 0,
        color: null
    }

    myRef = null;

    constructor(props) {
        super(props);
        console.log('constructor');
    }

    static getDerivedStateFromProps(nextProps, prevState){
        console.log('getDerivedStateFromProps: 마운트/업데이트 때 호출');
        if(nextProps.color !== prevState.color){
            return { color: nextProps.color };
        }
        return null;
    }

    componentDidMount() {
        console.log('componentDidMount: 첫 렌더링 이후=트리에 삽입된 직후 호출');    
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate', nextProps, nextState);
        // 숫자의 마지막 자리가 4일 경우 렌더링하지 않는다.
        return nextState.number % 10 !== 4;
    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

    handleClick = () => {
        this.setState({
            number: this.state.number + 1
        });
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('getSnapshotBeforeUpdate: 렌더링 결과가 반영되기 전 호출');
        if(prevProps.color !== this.props.color){
            return this.myRef.style.color;
        }
        return null;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('componentDidUpdate: 갱신이 일어난 직후 호출', prevProps, prevState);
        if(snapshot) {
            console.log('업데이트 되기 직전 색상: ', snapshot);
        }
    }

    render() {
        console.log("render");

        const style = {
          color: this.props.color  
        };

        return (
            <div>
                {this.props.missing.value}
                <h1 style={style} ref={ref => this.myRef=ref}>
                    {this.state.number}
                </h1>
                <p>color: {this.state.color}</p>
                <button onClick={this.handleClick}>
                    더하기
                </button>
            </div>
        )
    }
}

export default LifeCycleSample