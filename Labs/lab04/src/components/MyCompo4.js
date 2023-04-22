import React from 'react';
// import { Component } from 'react';

// 클래스형 컴포넌트 : React.Component를 상속하는 클래스를 선언
// JSX를 return 하는  render() 메서드를 작성
// 필요한 필드 (멤버 변수), 메서드 등을 선언할 수 있음

// 부모 컴포넌트에서 전달받은 props는 React.Component 객체의 props 속성에 저장됨
// 부모 컴포넌트에서 전달받은 props는 생성자(constructor) 작성할 때 부모 생성자 호출 (super(props))

export default class MyCompo4 extends React.Component {
  // render 메서드 정의
  // 클래스의 멤버들은 const, let, function 키워드 사용하지 않음

  render() {
    return (
      <>
        <h1>Hello, Class Component!</h1>
        <h2>
          안녕하세요! {this.props.name}, 나이는 {this.props.age}
        </h2>
      </>
    );
  }
}
