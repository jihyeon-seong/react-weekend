import { forwardRef, useRef } from 'react';

export default function ForwardRefEx() {
  const inputRef = useRef(null);

  const handleClick = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <h1>ForwardRefEx</h1>

      <Navigation handleClick={handleClick} />
      <MyInput ref={inputRef} />
    </div>
  );
}

const Navigation = ({ handleClick }) => {
  return (
    <nav>
      <button type="button" onClick={handleClick}>
        Click Me!
      </button>
    </nav>
  );
};

const MyInput = forwardRef((props, ref) => {
  return (
    <div className="margin-top-2">
      <input type="text" ref={ref} placeholder="Hello!" />
    </div>
  );
});
