import React from 'react';

// 클래스형 컴포넌트에서 상태 관리
// 1. state라는 이름으로 필드 선언. 상태 관리에 필요한 변수들을 객체 타입으로 초기화
// 2. 상태를 변경할 때는 Component 클래스에서 상속받은 setState() 메소드를 호출
// - setState(nextState) : 새롭게 변경할 상태 객체를 파라미터에 전달
// - setState(updater) : 상태를 변경할 수 있는 콜백 함수를 파라미터에 전달
//   - updater는 현재 상태를 아규먼트로 받아서 새로운 스테이트로 return
//   - updater = (prevState) => (nextState)
//   - setState는 비동기적으로 동작함. updater로 기존의 값을 이용해서 쓸 때 안전하게 사용할 수 있음
//   - 참고 문서: https://react.dev/reference/react/Component#setstate
// "setState does not update this.state immediately. This makes reading this.state right after calling setState a potential pitfall. Instead, use componentDidUpdate or the setState callback argument, either of which are guaranteed to fire after the update has been applied. If you need to set the state based on the previous state, you can pass a function to nextState as described above."
// 3. setState가 호출돼서 상태가 변경되면 리액트가 render 메소드를 다시 호출해서 화면을 다시 그림

export default class MyState extends React.Component {
  constructor(props) {
    super(props);

    // 1.
    this.state = {
      count: 0,
    };

    this.plusCount = this.plusCount.bind(this);
    this.minusCount = this.minusCount.bind(this);
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

    // 2.
    // { 객체의 key: 새로운 값 }
    this.setState({ count: this.state.count + 1 });
  }

  // 스레드에 안전한 방식. 비동기 방식에서 안전한 방식
  minusCount = () => {
    this.setState(prevState => ({ count: prevState.count - 1 }));
  };

  // 메서드 : 클래스에서 선언하는 함수. function 키워드를 사용하지 않음

  // 클래스형 컴포넌트는 반드시 render 메소드가 있어야 함
  // render 메소드는 반드시 JSX를 return 해야함
  render() {
    return (
      <div>
        <h1>클래스형 컴포넌트에서 상태 관리</h1>
        <h2>Count : {this.state.count}</h2>
        <button
          style={{
            padding: '20px 50px',
            fontSize: 20,
            fontWeight: 'bold',
          }}
          onClick={this.plusCount}
        >
          plus
        </button>
        <button
          style={{
            padding: '20px 50px',
            fontSize: 20,
            fontWeight: 'bold',
          }}
          onClick={this.minusCount}
        >
          minus
        </button>
      </div>
    );
  }
}
