import React from 'react';

// 클래스형 컴포넌트에서 상태 관리
export class MyState extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };

    this.plusCount = this.plusCount.bind(this);
  }

  // 필드 선언, 초기화. class 필드를 선언할 때 const, let, var 키워드를 사용하지 않음
  //   state = {
  //     count: 0,
  //   };

  //   plusCount = () => {
  //     this.setState({ count: this.state.count + 1 });
  //   };

  // 화살표 함수 : 이 함수를 가지고 있는 객체가 무조건 this
  // 일반 함수 : 함수를 호출한 button 객체. button은 setState, state 객체를 갖고 있지 않으니 에러가 발생

  plusCount() {
    // setState는 Component의 메소드
    // argument로 객체를 넘겨야 함
    // state가 변경되면 render가 자동 호출됨
    this.setState({ count: this.state.count + 1 });
  }

  // 메서드 : 클래스에서 선언하는 함수. function 키워드를 사용하지 않음

  // 클래스형 컴포넌트는 반드시 render 메소드가 있어야 함
  // render 메소드는 반드시 JSX를 return 해야함
  render() {
    return (
      <div>
        <h1>Count : {this.state.count}</h1>
        <button
          style={{ padding: '20px 50px', fontSize: 20, fontWeight: 'bold' }}
          onClick={this.plusCount}
        >
          Click!
        </button>
      </div>
    );
  }
}

// 함수형 컴포넌트에서 상태 관리
