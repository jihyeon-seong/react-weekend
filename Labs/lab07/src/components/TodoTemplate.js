import '../resources/scss/TodoTemplate.scss';

export default function TodoTemplate({ children }) {
  return (
    <div className="TodoTemplate">
      <img src="/images/mansun.png" alt="the cutest cat mansun" />
      <div className="app-title">일정 관리</div>
      <div className="content">{children}</div>
    </div>
  );
}
