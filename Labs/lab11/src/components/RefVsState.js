import { useRef, useState } from 'react';

export default function RefVsState() {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);

  const handleClickState = () => {
    setCount(count + 1);
    // state가 변경되면 화면이 갱신(re-render)됨
  };

  const handleClickRef = () => {
    countRef.current++;
    console.log(countRef.current);
    // ref는 current값이 변경되더라도 화면이 갱신(rerender)되지 않음 !! ㅎㅎ
  };

  return (
    <div>
      <h1>useRef VS useState</h1>
      <section>
        <h2>State</h2>

        <button type="button" onClick={handleClickState}>
          You clicked {count} times.
        </button>
      </section>
      <section>
        <h2>Ref</h2>

        <button type="button" onClick={handleClickRef}>
          You clicked {countRef.current} times.
        </button>
      </section>
    </div>
  );
}
