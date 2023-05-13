import { useState, useCallback } from 'react';

export default function CallbakckEx() {
  const [number, setNumber] = useState('');
  const [list, setList] = useState([]);

  //   const onChange = (e) => {
  //     setNumber(e.target.value);
  //   };

  //   const onClick = (e) => {
  //     const nextList = list.concat(Number(number));
  //     setList(nextList);

  //     setNumber('');
  //   };

  /**
   * 위와 같이 (이벤트 리스너) 함수들을 선언하는 경우에는
   * 검포넌트가 다시 렌더링이 될 때마다 새로 만들어지는 함수를 사용하게 됨
   * 대부분의 경우에는 문제가 없지만,
   * 컴포넌트의 렌더링이 자주 발생하거나 렌더링을 해야할 컴포넌트 개수가 많아지면
   * 성능저하를 일으킬 수도 있음
   *
   * 렌더링 성능을 최적화하기 위해서
   * 컴포넌트가 처음 렌더링될 때 만들어진 함수를 재활용하는 방법을 제공 -> useCallback
   */

  const onChange = useCallback((e) => setNumber(e.target.value), []);
  // 뒤에 dependency는 함수를 언제 새로 만들 거냥. state에 의존적이지 않으면 empty list
  // 컴포넌트가 처음 렌더링될 때만 onchange 함수가 만들어짐

  const onClick = useCallback(() => {
    const nextList = list.concat(Number(number));
    setList(nextList);
    setNumber('');
  }, [list, number]);
  // onClick 함수는 list, number state가 변경될 때만 함수를 생성

  return (
    <div>
      <h1>useCallback Example</h1>

      <input type="number" value={number} onChange={onChange} />

      <button type="button" onClick={onClick}>
        Add
      </button>

      <ul>
        {list.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
    </div>
  );
}
