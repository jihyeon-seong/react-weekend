import React from 'react';
import PropTypes from 'prop-types';

// 함수형 컴포넌트
// props 의 기본값 설정, 타입 체크

const MyCompo2 = props => {
  return (
    <div>
      <p>이름 : {props.name}</p>
      <p>나이 : {props.age}</p>
    </div>
  );
};

// 기본값 설정
// 부모 컴포넌트에서 값을 넘겨주지 않았을 경우 defaultProps 가 사용됨
MyCompo2.defaultProps = {
  name: '성이름',
  age: 913,
};

// props 데이터 타입 체크
// 에러가 나진 않고 경고문 표시
// props 속성들의 데이터 타입을 검사하고, 선언된 타입과 다를 경우 브라우저의 콘솔 창에 경고 메세지를 출력
MyCompo2.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
};

export default MyCompo2;
