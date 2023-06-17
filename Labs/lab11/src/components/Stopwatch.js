import { useRef, useState } from 'react';

export default function Stopwatch() {
  // Start 버튼을 클릭했을 때의 시간을 저장
  const [startTime, setStartTime] = useState(null);

  // 1/100초마다 측정하는 시간을 저장
  const [now, setNow] = useState(null);

  const intervalIdRef = useRef(null);
  // 그냥 let intervalId; 로 선언하면 리렌더링할 때마다 undefiend가 되기 때문에 useRef를 사용해야함
  // 화면 갱신에는 필요하지 않지만, react component 가 관리해야하는 변수면 useRef를 사용!

  const handleClickStart = () => {
    const initTime = Date.now();
    setStartTime(initTime);
    setNow(initTime);

    intervalIdRef.current = setInterval(() => {
      setNow(Date.now());
    }, 10);
  };

  const handleStop = () => {
    clearInterval(intervalIdRef.current);
  };

  let elapsedTime;
  if (startTime != null && now != null) {
    elapsedTime = (now - startTime) / 1000;
  }

  return (
    <div>
      <h1>Stopwatch</h1>
      <button type="button" onClick={handleClickStart}>
        Start
      </button>
      <button type="button" onClick={handleStop}>
        Stop
      </button>
      <h2 className="text-align-left">Time : {elapsedTime || '0'}</h2>
    </div>
  );
}
