import React, { useCallback, useState } from 'react';

// 함수형 컴포넌트에서 state 관리, 변경과 이벤트 처리

// export default () => { // 익명 함수로 export
const MyEvent2 = () => {
  //   const [username, setUsername] = useState('');
  //   const [message, setMessage] = useState('');

  const [formData, setFormData] = useState({ username: '', message: '' });

  const handleChange = useCallback(e => {
    const { name, value } = e.target;

    // if (name === 'username') {
    //   setUsername(value);
    // } else if (name === 'message') {
    //   setMessage(value);
    // }

    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  }, []);

  const clearInputs = () => {
    setFormData({ username: '', message: '' });
  };

  return (
    <div>
      <h1>함수형 컴포넌트에서 state 관리, 변경과 이벤트 처리</h1>

      <div>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
        <input type="text" value={formData.username} readOnly />
      </div>

      <div>
        <input
          type="text"
          name="message"
          value={formData.message}
          onChange={handleChange}
        />
        <input type="text" value={formData.message} readOnly />
      </div>

      <div>
        <button onClick={clearInputs}>Clear</button>
      </div>
    </div>
  );
};

export default MyEvent2;
