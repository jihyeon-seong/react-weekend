import React, { useState } from 'react';

// 함수형 컴포넌트에서 상태 관리
// https://react.dev/reference/react/useState
// 1. useState(initialState) 함수를 호출
//  - state의 초기값을 파라미터에 전달 -> useState는 원소가 2개인 배열을 return함 (state, setState)

const MyState2 = () => {
  const [count, setCount] = useState(0);

  // setState(nextState)
  const plusCount = () => setCount(count + 1);
  // setState(updater)
  // https://react.dev/reference/react/useState#updating-state-based-on-the-previous-state
  const minusCount = () => {
    setCount(prevCount => prevCount - 1);
  };

  return (
    <div>
      <h1>함수형 컴포넌트에서 상태 관리</h1>
      <div>
        {/* 함수형은 this.count라 안 써도 됨 */}
        <h2>Count: {count}</h2>
        <div>
          <button
            style={{
              padding: '20px 50px',
              fontSize: 20,
              fontWeight: 'bold',
              backgroundColor: 'pink',
            }}
            // onClick={() => setCount(count + 1)}
            onClick={plusCount}
          >
            plus
          </button>
          <button
            style={{
              padding: '20px 50px',
              fontSize: 20,
              fontWeight: 'bold',
              backgroundColor: 'skyblue',
            }}
            // onClick={() => setCount(count - 1)}
            // onClick={minusCount}
            onClick={() => {
              minusCount();
            }}
          >
            minus
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyState2;
