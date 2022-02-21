/*
 * 액션이 디스패치될 때마다 액션의 정보,
 * 디스패치 되기 전후의 상태를 콘솔에 보여줌.
 */
const loggerMiddleware = store => next => action => {
    // 액션 타입으로 log를 그룹화한다.
    console.group(action && action.type);
    console.log('이전 상태:', store.getState());
    console.log('액션:', action);
    // 다음 미들웨어 or 리듀서에게 전달
    next(action);
    console.log('다음 상태:', store.getState());
    console.groupEnd();
};

/*
 * store: 리덕스 스토어 인스턴스
 * next: store.dispatch. 그 다음 처리해야 할 미들웨어에게 액션을 넘겨줌
 *       다음 미들웨어가 없으면 리듀서에게 넘겨줌
 * action: 디스패치된 액션
const loggerMiddleware = function loggerMiddleware(store) {
    return function(next) {
        return function(action {
            // 미들웨어 기본 구조
        };
    };
};
*/

export default loggerMiddleware;