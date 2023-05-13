import TodoListItem from './TodoListItem';
import '../public/scss/TodoList.scss';

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
