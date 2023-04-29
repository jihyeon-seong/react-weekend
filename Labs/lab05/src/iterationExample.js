const IterationExample = (props) => {
  // https://react.dev/learn/rendering-lists#why-does-react-need-keys
  const listItems = props.items.map((item, index) => (
    <li key={item.id}>
      {index + 1} - {item.name}
    </li>
  ));

  return (
    <div>
      <h1>IterationExample - List 만들기</h1>
      <ul>{listItems}</ul>
    </div>
  );
};

export default IterationExample;
