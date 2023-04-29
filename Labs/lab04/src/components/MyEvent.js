import React, { Component } from 'react';

// 클래스형 컴포넌트에서 두 개 이상의 state 관리 & 이벤트 처리
export default class MyEvent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      message: '',
    };

    this.handleChangeUsername = this.handleChangeUsername.bind(this);
    this.handleChangeMessage = this.handleChangeMessage.bind(this);
  }

  handleChangeUsername = e => {
    // 클래스형 컴포넌트에서 state 변경
    const username = e.target.value;
    this.setState({ username });
  };

  handleChangeMessage = e => {
    this.setState({ message: e.target.value });
  };

  render() {
    const { username, message } = this.state;

    return (
      <div>
        <h1>클래스형 컴포넌트에서 두 개 이상의 state 관리 & 이벤트 처리</h1>
        <div>
          <div>
            <h2>username : </h2>
            <input
              type="text"
              name="username"
              onChange={this.handleChangeUsername}
            />
            {/* username에 입력한 값들이 아래 readOnly input에 자동 업데이트 */}
            <input
              type="text"
              value={username}
              readOnly
              style={{ backgroundColor: 'lightgray' }}
            />
          </div>

          <div>
            <h2>message : </h2>
            <input
              type="text"
              name="message"
              onChange={this.handleChangeMessage}
            />
            {/* message 입력한 값들이 아래 readOnly input에 자동 업데이트 */}
            <input
              type="text"
              value={message}
              readOnly
              style={{ backgroundColor: 'lightgray' }}
            />
          </div>
        </div>
      </div>
    );
  }
}
