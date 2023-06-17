import { useRef, useState } from 'react';

export default function RefDOM() {
  const [text, setText] = useState('');
  const inputRef = useRef(null);

  const handleClick = () => {
    setText('');
    inputRef.current.focus();
  };

  return (
    <div>
      <h1>RefDOM</h1>
      <h2>useRef로 DOM 조작하기</h2>
      <div>
        <input
          type="text"
          placeholder="enter message"
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              handleClick();
            }
          }}
          ref={inputRef}
        />
        <button type="button" onClick={handleClick}>
          Send Message
        </button>
      </div>
    </div>
  );
}
