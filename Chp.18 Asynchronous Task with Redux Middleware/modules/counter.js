import { createAction, handleActions } from "redux-actions";
import { delay, put, takeEvery, takeLatest, select } from 'redux-saga/effects';

const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';
const INCREASE_ASYNC = 'counter/INCREASE_ASYNC';
const DECREASE_ASYNC = 'counter/DECREASE_ASYNC';

export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);
// 마우스 클릭 이벤트가 payload 안에 들어가지 않도록
// () => undefined를 두 번째 파라미터로 넣어준다.
export const increaseAsync = createAction(INCREASE_ASYNC, () => undefined);
export const decreaseAsync = createAction(DECREASE_ASYNC, () => undefined);

// 제너레이터 함수
function* increaseSaga() {
    yield delay(1000);
    yield put(increase());
    // store: 스토어 상태
    const number = yield select(state => state.counter);
    console.log(`현재 값은 ${number}입니다.`);
}
function* decreaseSaga() {
    yield delay(1000);
    yield put(decrease());
}
export function* counterSaga() {
    // takeEvery: 들어오는 모든 액션에 대해 특정 작업을 처리
    yield takeEvery(INCREASE_ASYNC, increaseSaga);
    // takeLatest: 기존에 진행 중이던 작업이 있으면 취소,
    // 가장 마지막으로 실행된 작업만 수행.
    yield takeLatest(DECREASE_ASYNC, decreaseSaga);
}

// thunk 함수.
// 1초 뒤에 increase/decrease 함수를 디스패치.
/*
export const increaseAsync = () => dispatch => {
    setTimeout(() => { dispatch(increase()); }, 1000);
};
export const decreaseAsync = () => dispatch => {
    setTimeout(() => { dispatch(decrease()); }, 1000);
};
*/

// 상태는 꼭 객체일 필요가 없다.
const initialState = 0;

const counter = handleActions(
    {
        [INCREASE]: state => state + 1,
        [DECREASE]: state => state -1
    },
    initialState
);

export default counter;