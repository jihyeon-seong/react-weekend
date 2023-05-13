import { useState } from 'react';

import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import TodoTemplate from './components/TodoTemplate';

function App() {
  // App에서 state로 관리하는 변수 - 할 일 목록
  const [todos, setTodos] = useState([
    { id: 0, text: 'Todo 1', checked: false },
    { id: 1, text: 'Todo 2', checked: true },
    { id: 2, text: 'Todo 3', checked: false },
  ]);

  return (
    <TodoTemplate>
      <TodoInsert />
      <TodoList />
    </TodoTemplate>
  );
}

export default App;
