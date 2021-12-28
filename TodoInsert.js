import { useState, useCallback } from 'react';
import { MdAdd } from 'react-icons/md';
import './TodoInsert.scss';

const TodoInsert = ({ onInsert }) => {
    const [value, setValue] = useState('');

    const onChange = useCallback(e => {
        setValue(e.target.value);
    }, []);

    const onSubmit = useCallback( e => {
        onInsert(value);
        // value값 초기화
        setValue('');

        // submit 이벤트는 브라우저에서 새로고침을 발생시킨다.
        // 이를방지하기 위해 이 함수를 호출한다.
        e.preventDefault();
    }, [onInsert, value], );

    return (
        <form className="TodoInsert" onSubmit={onSubmit}>
            <input
                placeholder="할 일 입력"
                value={value}
                onChange={onChange}
            />
            <button type="submit">
                <MdAdd />
            </button>
        </form>
    );
};

export default TodoInsert;