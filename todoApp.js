import { useState, useRef, useCallback } from 'react';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';

const App = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: '리액트의 기초 알아보기',
      checked: true,
    },
    {
      id: 2,
      text: '컴포넌트 스타일링 해보기',
      checked: true,
    },
    {
      id: 3,
      text: '일정 관리 앱 만들어 보기',
      checked: false,
    },
  ]);

  // 일정 추가
  const nextId = useRef(4);            // 고유값 id는 ref로 작성
  const onInsert = useCallback( text => {
    const todo = {
      id: nextId.current,
      text,
      checked: false,
    };
    setTodos(todos.concat(todo));
    // 다음에 추가될 id 값에 1을 더함
    nextId.current += 1; 
  }, [todos], );

  // 일정 삭제
  const onRemove = useCallback( id => {
    setTodos(todos.filter(todo => todo.id !== id));
  }, [todos], );

  // 일정 체크박스 수정
  const onToggle = useCallback( id => {
    setTodos( todos.map(todo => todo.id === id ? 
      { ...todo, checked: !todo.checked } : todo, ), );
  }, [todos], );

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
    </TodoTemplate>
  );
}

export default App;
