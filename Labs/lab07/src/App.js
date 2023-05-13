import { useRef, useState, useCallback } from 'react';

import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import TodoTemplate from './components/TodoTemplate';

function App() {
  // App에서 state로 관리하는 변수 - 할 일 목록
  const [todos, setTodos] = useState([
    { id: 0, text: '방 청소하기!!!', checked: false },
    { id: 1, text: '책 읽기!!!', checked: true },
    { id: 2, text: '놀기!!!', checked: false },
  ]);

  // todo item이 추가될 때 id로 사용
  const nextId = useRef(3);

  // todos 배열에 새로운 todo 아이템을 생성해 추가하는 함수
  const onInsert = useCallback(
    (text) => {
      const todo = { id: nextId.current, text, checked: false };
      setTodos(todos.concat(todo));
      nextId.current += 1;
    },
    [todos],
  );

  const onRemove = useCallback(
    (id) => {
      setTodos(todos.filter((todo) => todo.id !== id));
    },
    [todos],
  );

  const onToggle = useCallback(
    (id) => {
      setTodos(
        todos.map((todo) =>
          todo.id === id ? { ...todo, checked: !todo.checked } : todo,
        ),
      );
    },
    [todos],
  );

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />

      {/* state로 관리하는 할 일 목록 배열을 props로 TodoList 컴포넌트에게 전달 */}
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
    </TodoTemplate>
  );
}

export default App;
