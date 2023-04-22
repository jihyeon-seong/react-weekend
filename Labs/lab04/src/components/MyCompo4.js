import React from 'react';
// import { Component } from 'react';
import PropTypes from 'prop-types';

// 클래스형 컴포넌트 : React.Component를 상속하는 클래스를 선언
// JSX를 return 하는  render() 메서드를 작성
// 필요한 필드 (멤버 변수), 메서드 등을 선언할 수 있음

// 부모 컴포넌트에서 전달받은 props는 React.Component 객체의 props 속성에 저장됨
// 부모 컴포넌트에서 전달받은 props는 생성자(constructor) 작성할 때 부모 생성자 호출 (super(props))

// https://react.dev/reference/react/Component#component

export default class MyCompo4 extends React.Component {
  // render 메서드 정의
  // 클래스의 멤버들은 const, let, function 키워드 사용하지 않음

  // 클래스 안에서 props 기본값 설정하기
  static defaultProps = { name: 'B둘기', age: 64 };

  // 클래스 안에서 props type 체크
  static propTypes = {
    name: PropTypes.string,
    age: PropTypes.number.isRequired,
  };

  render() {
    const { name, age, children } = this.props;

    return (
      <>
        <h1>Hello, Class Component!</h1>
        <h2>
          안녕하세요! {name}, 나이는 {age}
        </h2>

        <div>{children}</div>
      </>
    );
  }
}

// MyCompo4.defaultProps = { name: 'B둘기', age: 64 };
