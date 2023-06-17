import { useRef } from 'react';

/**
 * useRef
 *
 * https://react.dev/reference/react/useRef
 *
 */
export default function Ref() {
  const ref = useRef(0); // const ref = useRef(initialValue)
  // useRef는 current 속성만을 갖는 자바스크립트 객체를 반환

  // console.log(`ref initialValue = ${ref.current}`);

  const handleClick = () => {
    ref.current++;
    alert(`ref.current = ${ref.current}`);
  };
  return (
    <div>
      <h1>useRef</h1>
      <button type="button" onClick={handleClick}>
        Click Me!
      </button>
    </div>
  );
}
