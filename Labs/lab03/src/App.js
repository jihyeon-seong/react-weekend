import { Fragment } from 'react';

// 함수형 컴포넌트
// return하는 JSX가 화면에 렌더링됨

// 하나의 컴포넌트에 여러 개의 html 요소들이 있다면, 반드시 하나의 부모 요소로 감싸야 함
// 리액트가 사용하는 virtualDOM은 컴포넌트 내부는 하나의 DOM 트리 구조로 이루어져야 한다는 규칙이 있기 때문임

// 리액트 버전 16부터 Fragment 태그가 생김
// <Fragment></Fragment> -> <></>
// https://react.dev/reference/react/Fragment

function App() {
  const name = '성지현'; // 변수 선언
  // 자바스크립트 표현식을 JSX 안에서 사용하려면 중괄호를 사용함

  const name2 = '리액트';

  const myStyle = {
    color: 'gold',
    backgroundColor: 'black',
    fontSize: 128,
    fontWeight: 'bold',
    padding: 30,
  };

  return (
    <>
      <h1>Hello, React!</h1>
      <h2>안녕하세요, {name}!</h2>

      {/* 이렇게 하면 주석 쓸 수 있다! */}
      <div>
        {/* 조건식 ? true : false */}
        {name2 === '리액트' ? <span>React</span> : <span>리액트 아님!</span>}
      </div>

      <div>
        {/* 리액트는 null을 화면에 렌더링하지 않음 */}
        {name2 === '리액트2' ? <span>React</span> : null}
      </div>

      <div>
        {/* 
          - 조건이 참일 때만 렌더링하는 요소가 있고, 조건이 거짓일 때 렌더링하는 요소가 없는 경우 and(&&) 연산자를 이용함 
          - 리액트는 false를 화면에 렌더링하지 않음
        */}
        {name2 === '리액트' && <span>참 리액트~</span>}
        {name2 === '리액트2' && <span>이건 안 나옵니다~</span>}
      </div>

      <div>
        {/* 
          - CSS inline 
          - style={}
          - JSX에서 태그 속성 값을 설정할 때 문자열만 따옴표를 사용하고, 그 이외의 값들은 표현식 {} 을 사용함 
          - https://react.dev/learn#adding-styles
          - 바깥 쪽 중괄호는 자바스크립트 표현식, 안 쪽은 자바스크립트 객체를 만들기 위한 중괄호
        */}

        <span
          style={{
            // JavaScript Object
            // 태그 태그 사이에는 주석 가능~! 자바스크립트니까
            // https://react.dev/reference/react/useInsertionEffect#injecting-dynamic-styles-from-css-in-js-libraries
            // css에서 하이픈 - 표기되는 걸 카멜 케이스로 바뀜
            // 문자열은 따옴표로 감싸줘야 한다. 자바스크립트 객체니까
            color: 'skyblue',
            backgroundColor: 'gold',
            fontSize: 72, // 단위가 없는 경우 px 72px
            fontWeight: 'bold',
          }}
        >
          {name}
        </span>

        {/* style 객체 변수를 이용하기 */}
        <span style={myStyle}>{name}</span>
      </div>
    </>
  );
}

export default App;
