import React from 'react';

// 함수형 컴포넌트
// function MyCompo() {
//   return <div>MyCompo</div>;
// }

// 화살표 함수
// 컴포넌트의 이름은 대문자로 시작. 카멜 표기법 사용 (html 태그 이름들과 구분하기 위해)
// XML 은 대소문자 구분

// 컴포넌트 함수는 반드시 return 문이 있어야 함

// 함수형 컴포넌트에서 부모 컴포넌트가 전달한 props 를 저장하기 위한 파라미터를 선언
const MyCompo = props => {
  console.log(props);
  // 부모 컴포넌트에서 {attributeName : attributeValue, ...} 객체를 파라미터에 전달
  // https://react.dev/learn/passing-props-to-a-component

  // 파라미터 값이 없을 경우 undefiend 라 렌더링 되지 않음

  return (
    <div>
      <h1>
        Hello, {props.name}! 나는 {props.age}살
      </h1>
    </div>
  );
};

export default MyCompo;
