import React from 'react';
import MyCompo from './components/MyCompo';
import MyCompo2 from './components/MyCompo2';
import MyCompo3 from './components/MyCompo3';
import MyCompo4 from './components/MyCompo4';
import { MyState } from './components/MyState';

// properties, state
// App에서 MyCompo 로 데이터를 넘기기 위해 property 사용
// https://react.dev/reference/react-dom/components/common#react-event-object-properties

// 부모에서는 xml의 속성으로 지정하고 자식은 param으로 받음

// props : properties. 부모 컴포넌트에서 자식 컴포넌트로 데이터를 전달할 때 사용
// props를 전달할 때 부모 컴포넌트에서는 XML의 속성(attribute) 값으로 설정
// props를 전달받을 때 자식 컴포넌트에서는 파라미터에 전달됨 (key-value object 형태로)

// 부모 컴포넌트에서 하위 노드를 자식 컴포넌트에게 props로 전달할 수 있음
// 자식 컴포넌트에서 노드를 전달받을 때는 children 속성 값에 전달됨

function App() {
  return (
    <>
      <MyState />
      <hr />

      <MyCompo name="성지현" age={777} />
      <hr />

      <MyCompo2 age={99}>
        <span>
          <strong>React</strong>
        </span>
      </MyCompo2>
      <hr />

      <MyCompo3 name="MyComponent3" age={1010}>
        <span>
          <strong>My Component 3!!!</strong>
        </span>
      </MyCompo3>

      <MyCompo4 age={123}>
        <span>
          <strong>구구구999</strong>
        </span>
      </MyCompo4>
    </>
  );
}

export default App;
