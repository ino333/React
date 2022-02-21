// import { bindActionCreators } from "redux";
import { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import Counter from "../components/Counter";
import { increase, decrease } from "../modules/counter";

const CounterContainer = () => {
    const number = useSelector(state => state.counter.number);
    const dispatch = useDispatch();
    const onIncrease = useCallback(() => dispatch(increase()), [dispatch]);
    const onDecrease = useCallback(() => dispatch(decrease()), [dispatch]);
    return <Counter number={number} onIncrease={onIncrease} onDecrease={onDecrease} />
}

/*
const CounterContainer = ({ number, increase, decrease }) => {
    return <Counter number={number} onIncrease={increase} onDecrease={decrease} />;
};
*/

// CounterContainer 컴포넌트와 리덕스 연동
// 1) mapStateToProps함수와 mapDispatchToProps 함수를 미리 선언하여 사용
/* 
const mapStateToProps = state => ({
    number: state.counter.number,
});
const mapDispatchToProps = dispatch => ({
    increase: () => { dispatch(increase()) },
    decrease: () => { dispatch(decrease()) },
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(CounterContainer);
*/

// 2) bindActionCreators 함수 이용
/* 
export default connect(
    state => ({ number: state.counter.number, }),
    dispatch => bindActionCreators(
        { increase, decrease, },
        dispatch,
    ),
)(CounterContainer);
*/

// 3) mapDispatchToProps에 해당하는 파라미터를 액션 생성 함수로 이루어진 객체를 전달
//    이 경우 connect 함수가 내부적으로 bindActionCreators 작업을 대신한다.
/*
export default connect(
    state => ({ number: state.counter.number, }),
    { increase, decrease, },
)(CounterContainer);
*/

export default CounterContainer;