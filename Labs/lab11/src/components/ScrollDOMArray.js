import { useRef, useState } from 'react';

export default function ScrollDOMArray() {
  const cats = [];
  const [catsIndex, setCatsIndex] = useState(0);

  for (let index = 0; index < 10; index++) {
    cats.push({
      id: index,
      imageUrl: `https://placekitten.com/512?image=${index}`,
    });
  }

  const catsRef = useRef([]);

  const handleClick = (ref, buttonMode) => {
    if (buttonMode === 'prev') {
      if (catsIndex > 0) {
        setCatsIndex(catsIndex - 1);
      } else {
        setCatsIndex(0);
      }
    } else if (buttonMode === 'next') {
      if (catsIndex < 9) {
        setCatsIndex(catsIndex + 1);
      } else {
        setCatsIndex(0);
      }
    }

    console.log(catsIndex);

    ref.current[catsIndex].scrollIntoView({
      behavior: 'smooth',
      block: 'center',
      inline: 'nearest',
    });
  };

  const itemsRef = useRef(new Map());

  const addNode = (id, node) => {
    const map = itemsRef.current;
    map.set(id, node);
  };

  const moveTo = (id) => {
    const map = itemsRef.current;
    const node = map.get(id);

    node.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
      inline: 'nearest',
    });
  };

  return (
    <div>
      <h1>ScrollDOMArray</h1>

      <nav className="scroll-nav">
        <button type="button" onClick={(e) => moveTo(0)}>
          1
        </button>
        <button type="button" onClick={(e) => moveTo(5)}>
          2
        </button>
        <button type="button" onClick={(e) => moveTo(9)}>
          3
        </button>
      </nav>

      <nav className="scroll-nav">
        <button type="button" onClick={(e) => handleClick(catsRef, 'prev')}>
          Prev
        </button>
        <button type="button" onClick={(e) => handleClick(catsRef, 'next')}>
          Next
        </button>
      </nav>

      <div className="carousel">
        <ul>
          {cats.length > 0 &&
            cats.map((cat) => (
              <li key={cat.id}>
                <img
                  ref={(el) => (catsRef.current[cat.id] = el)}
                  src={cat.imageUrl}
                  alt={`kitten ${cat.id + 1}`}
                />
              </li>
            ))}
        </ul>
      </div>

      <div className="carousel">
        <ul>
          {cats.length > 0 &&
            cats.map((cat) => (
              <li key={cat.id}>
                <img
                  ref={(node) => addNode(cat.id, node)}
                  src={cat.imageUrl}
                  alt={`kitten ${cat.id + 1}`}
                />
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}
