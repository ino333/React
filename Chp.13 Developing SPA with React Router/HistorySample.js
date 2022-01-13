import { Component } from 'react';
import { withRouter } from './withRouter';

class HistorySample extends Component {
    constructor() {
        super();
        this.handleGoBack=this.handleGoBack.bind(this);
        this.handleGoHome=this.handleGoHome.bind(this);
    }
    // 뒤로가기
    handleGoBack = () => {
        this.props.navigate(-1);
    }
    
    // 홈으로 이동
    handleGoHome = () => {
        this.props.navigate('/');
    }

    componentDidMount() {
        // 페이지에 변화가 생길 때마다 나갈 것인지 확인
        //this.unblock = this.history.block('해당 페이지에서 벗어나겠습니까?');
    }

    componentWillUnmount() {
        // 컴포넌트가 언마운트되면 확인을 멈춤
        //if(this.unblock) {
        //    this.unblock();
        //}
    }

    render() {
        return (
            <div>
                <button onClick={this.handleGoBack}>뒤로</button>
                <button onClick={this.handleGoHome}>홈으로</button>
            </div>
        );
    }
}

export default withRouter(HistorySample);