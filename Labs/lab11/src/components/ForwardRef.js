import { forwardRef, useRef } from 'react';

/**
 * https://react.dev/reference/react/forwardRef
 *
 * forwardRef
 */
export default function ForwardRef() {
  const inputRef = useRef(null);

  return (
    <div>
      <h1>ForwardRef</h1>
      <h2>다른 컴포넌트 DOM 참조</h2>
      <nav>
        <button
          type="button"
          onClick={() => {
            inputRef.current.focus();
          }}
        >
          Click
        </button>
      </nav>
      {/* <MyInput inputRef={inputRef} /> */}
      <MyInput ref={inputRef} />
    </div>
  );
}

/**
 * 이렇게 해도 동작은 함
 */
// const MyInput = ({ inputRef }) => {
//   return (
//     <div className="margin-top-2">
//       <input type="text" placeholder="Enter message" ref={inputRef} />
//     </div>
//   );
// };

/**
 * react에서 권장하는 방법
 *
 * forwardRef 함수에게 props와 ref를 argument로 전달 받는 함수형 컴포넌트를 전달
 */
const MyInput = forwardRef((props, ref) => {
  return (
    <div className="margin-top-2">
      {/* <input type="text" placeholder="Enter message" ref={inputRef} /> */}
      <input type="text" placeholder="Enter message" ref={ref} />
    </div>
  );
});
