import React from 'react';
import MyCompo from './components/MyCompo';
import MyCompo2 from './components/MyCompo2';

// properties, state
// App에서 MyCompo 로 데이터를 넘기기 위해 property 사용
// https://react.dev/reference/react-dom/components/common#react-event-object-properties

// 부모에서는 xml의 속성으로 지정하고 자식은 param으로 받음

// props : properties. 부모 컴포넌트에서 자식 컴포넌트로 데이터를 전달할 때 사용
// props를 전달할 때 부모 컴포넌트에서는 XML의 속성(attribute) 값으로 설정
// props를 전달받을 때 자식 컴포넌트에서는 파라미터에 전달됨 (key-value object 형태로)
function App() {
  return (
    <>
      <MyCompo name="성지현" age={777} />
      <MyCompo2 age={'34'} />
    </>
  );
}

export default App;
