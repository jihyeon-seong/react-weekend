import { useState, useMemo } from 'react';

// input(number state)만 변경이 되도 getAverage()가 호출됨
const getAverage = (numbers) => {
  console.log('getAverage()');

  if (numbers.length === 0) {
    return 0;
  } else {
    const sum = numbers.reduce((x, y) => x + y, 0);
    return sum / numbers.length;
  }
};

export default function MemoEx() {
  const [number, setNumber] = useState('');
  const [list, setList] = useState([]);

  // input(number state)만 변경이 되도 getAverage()가 호출됨
  //   const average = getAverage(list);

  // list가 변경될 때만 호출
  const average = useMemo(() => getAverage(list), [list]);

  const onChange = (e) => {
    setNumber(e.target.value);
  };

  const onClick = () => {
    const nextList = list.concat(Number(number));
    setList(nextList);
    setNumber('');
  };

  return (
    <div>
      <h1>useMemo Hooks</h1>
      <input type="number" value={number} onChange={onChange} />

      <button type="button" onClick={onClick}>
        Add
      </button>

      <ul>
        {list.map((value, index) => (
          <li key={index}>🐱 {value}</li>
        ))}
      </ul>

      <div>average : {average}</div>
    </div>
  );
}
