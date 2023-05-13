import React from 'react';
import TodoListItem from './TodoListItem';

// 할 일들의 배열을 관리. TodoListItem 컴포넌트들을 보여줌

export default function TodoList() {
  return (
    <div className="TodoList">
      <TodoListItem />
      <TodoListItem />
      <TodoListItem />
    </div>
  );
}
