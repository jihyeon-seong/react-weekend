import '../resources/scss/TodoTemplate.scss';

export default function TodoTemplate({ now, children }) {
  return (
    <div className="TodoTemplate">
      <div className="header-image"></div>
      <div className="app-title">
        {now.toLocaleDateString()} {now.toLocaleTimeString()}
      </div>
      <div className="content">{children}</div>
    </div>
  );
}
