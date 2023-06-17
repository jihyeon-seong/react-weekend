import { useRef, useState } from 'react';
import { flushSync } from 'react-dom';

export default function Casousel() {
  const [index, setIndex] = useState(0);

  // eslint-disable-next-line
  const catsRef = useRef([]);
  const selectedRef = useRef(null);

  const cats = [];

  for (var i = 0; i < 10; i++) {
    cats.push({
      id: i,
      imageUrl: `https://placekitten.com/512?image=${i}`,
    });
  }

  const handleClick = () => {
    // https://react.dev/reference/react-dom/flushSync
    // flushSync를 사용하면 DOM 즉시 업데이트
    flushSync(() => {
      if (index < cats.length - 1) {
        setIndex(index + 1);
      } else {
        setIndex(0);
      }
    });

    // catsRef.current[index].scrollIntoView({
    //   behavior: 'smooth',
    //   block: 'center',
    //   inline: 'nearest',
    // });

    const node = selectedRef.current;
    node.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
      inline: 'nearest',
    });

    console.log(index);
  };

  return (
    <div>
      <h1>Casousel</h1>

      <nav className="margin-bottom-2">
        <button type="button" onClick={(e) => handleClick()}>
          Next
        </button>
      </nav>

      <div className="carousel">
        <ul>
          {cats.length > 0 &&
            cats.map((cat, i) => (
              <li key={cat.id}>
                <img
                  // ref={(el) => (catsRef.current[cat.id] = el)}
                  ref={index === i ? selectedRef : null}
                  src={cat.imageUrl}
                  alt={`cat ${cat.id}`}
                  className={i === index ? 'active' : null}
                />
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}
