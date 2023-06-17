import { useRef } from 'react';

export default function ScrollDOM() {
  const firstRef = useRef(null);
  const secondRef = useRef(null);
  const thirdRef = useRef(null);

  const handleClick = (ref) => {
    ref.current.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
      inline: 'nearest',
    });
  };

  return (
    <div>
      <h1>ScrollDOM</h1>

      <nav className="scroll-nav">
        <button type="button" onClick={(e) => handleClick(firstRef)}>
          1
        </button>
        <button type="button" onClick={(e) => handleClick(secondRef)}>
          2
        </button>
        <button type="button" onClick={(e) => handleClick(thirdRef)}>
          3
        </button>
      </nav>

      <div className="carousel">
        <ul>
          <li>
            <img
              ref={firstRef}
              src="https://placekitten.com/512?image=1"
              alt="kitten 1"
            />
          </li>
          <li>
            <img
              ref={secondRef}
              src="https://placekitten.com/512?image=2"
              alt="kitten 2"
            />
          </li>
          <li>
            <img
              ref={thirdRef}
              src="https://placekitten.com/512?image=3"
              alt="kitten 3"
            />
          </li>
        </ul>
      </div>
    </div>
  );
}
