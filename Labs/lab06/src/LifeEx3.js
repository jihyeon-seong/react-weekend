import { useState, useEffect } from 'react';

export default function LifeEx3() {
  // useState Hook
  const [now, setNow] = useState(new Date());

  /**
   * useEffect Hooks
   * useEffect = componentDidMount + componentWillUnmount 함수 기능들을 수행
   * useEffect(effect, dependencies)
   * effect : 콜백 함수 (dependencies 값이 변했을 때 호출됨)
   * dependencies : 의존성 배열
   * useEffect 함수를 호출하면 effect 콜백 함수가 1번 실행됨
   * 의존성 배열의 원소 값이 변경될 때마다 콜백 함수가 실행됨
   */
  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);

    /**
     * useEffect가 return하는 콜백은 컴포넌트가 unmount될 때 호출
     * unmount될 때 할 일이 없으면 return null
     */
    return () => clearInterval(id);
  }, []);

  return (
    <>
      <h1>함수 컴포넌트 Hooks</h1>
      <h2>{now.toLocaleTimeString()}</h2>
      <h3>{now.toLocaleDateString()}</h3>
    </>
  );
}
