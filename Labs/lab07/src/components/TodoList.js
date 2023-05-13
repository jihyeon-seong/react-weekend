// 할 일들의 배열을 관리. TodoListItem 컴포넌트들을 보여줌

import TodoListItem from './TodoListItem';
import './TodoList.scss';

export default function TodoList({ todos, onRemove, onToggle }) {
  return (
    <div className="TodoList">
      {todos.map((todo) => (
        // 배열 todos의 원소 todo를 TodoListItem 컴포넌트에게 props로 전달
        <TodoListItem
          key={todo.id}
          todo={todo}
          onRemove={onRemove}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
}
