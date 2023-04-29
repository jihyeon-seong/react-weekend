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

    // 위의 두 function을 하나의 function으로 만듦
    this.handleChange = this.handleChange.bind(this);

    this.handleKeyDown = this.handleKeyDown.bind(this);

    this.clear = this.clear.bind(this);
  }

  handleChangeUsername = e => {
    // 클래스형 컴포넌트에서 state 변경
    const username = e.target.value;
    this.setState({ username });
  };

  handleChangeMessage = e => {
    this.setState({ message: e.target.value });
  };

  // 위의 두 function을 하나의 function으로 만듦
  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value }); // e.target.name에 저장된 값을 key값으로 쓰고, e.target.value를 키의 값으로 씀
  };

  handleKeyDown = e => {
    const { name, value } = e.target;
    if (e.key === 'Enter') {
      alert(`${name} : ${value}`);
    }
  };

  clear = e => {
    if (e.target.className === 'username') {
      this.setState({ username: '' });
    } else if (e.target.className === 'message') {
      this.setState({ message: '' });
    } else if (e.target.className === 'all') {
      this.setState({ username: '' });
      this.setState({ message: '' });

      document.querySelectorAll('input[type="text"]').forEach(input => {
        input.value = '';
      });
    }
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
              //   onChange={this.handleChangeUsername}
              onChange={this.handleChange}
              onKeyDown={this.handleKeyDown}
              onClick={this.clear}
            />
            {/* username에 입력한 값들이 아래 readOnly input에 자동 업데이트 */}
            <input
              type="text"
              value={username}
              readOnly
              style={{ backgroundColor: 'lightgray' }}
            />
            <button className="username" onClick={this.clear}>
              Clear Username
            </button>
          </div>

          <div>
            <h2>message : </h2>
            <input
              type="text"
              name="message"
              //   onChange={this.handleChangeMessage}
              onChange={this.handleChange}
              onKeyDown={this.handleKeyDown}
              onClick={this.clear}
            />
            {/* message 입력한 값들이 아래 readOnly input에 자동 업데이트 */}
            <input
              type="text"
              value={message}
              readOnly
              style={{ backgroundColor: 'lightgray' }}
            />
            <button className="message" onClick={this.clear}>
              Clear Message
            </button>
          </div>

          <div>
            <button className="all" onClick={this.clear}>
              Clear All
            </button>
          </div>
        </div>
      </div>
    );
  }
}
