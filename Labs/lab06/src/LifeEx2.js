import { Component } from 'react';

export default class LifeEx2 extends Component {
  state = {
    now: new Date(), // 현재 시간 정보를 state로 관리
    intervalId: null, // setInterval() 함수의 리턴 값을 state로 관리
  };

  componentDidMount() {
    // 1000ms 마다 setInterval 함수에 등록된 콜백을 호출 -> state.now 값을 변경
    const id = setInterval(() => {
      this.setState({ now: new Date() });
    }, 1000);

    this.setState({ intervalId: id });

    console.log('componentDidMount', id);
  }

  componentWillUnmount() {
    const id = this.state.intervalId;
    console.log('componentWillUnmount', id);

    if (id) {
      clearInterval(id);
    }
  }

  render() {
    const { now } = this.state;

    return (
      <>
        <h1>class component lifecycle</h1>
        <h2>{now.toLocaleTimeString()}</h2>
        <h3>{now.toLocaleDateString()}</h3>
      </>
    );
  }
}
