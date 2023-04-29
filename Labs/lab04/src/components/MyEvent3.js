import React, { useCallback, useState } from 'react';

// 함수형 컴포넌트 - state 초기값을 객체로 사용하기

const MyEvent3 = () => {
  const [form, setForm] = useState({
    username: '',
    message: '',
  });

  // useCallback 에 관해 참고 문서 : https://www.freecodecamp.org/news/better-react-performance-usecallback-vs-usememo/
  // One of the first things to note is precisely the function definition part. It stores the definition, not the execution itself, not the result – so the function will be executed every time it is called. Because of this, don't use this hook to avoid lengthy calculations.
  const handleChange = e => {
    const { name, value } = e.target;
    // setForm({ [name]: value }); // Warning
    // setForm({ ...form, [name]: value }); // Warning 사라짐

    setForm(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const clear = () => {
    setForm({ username: '', message: '' });
  };

  return (
    <div>
      <h1>함수형 컴포넌트 - state 초기값을 객체로 사용하기</h1>

      <div>
        <input
          type="text"
          value={form.username}
          name="username"
          placeholder="username"
          onChange={handleChange}
        />
        <input type="text" value={form.username} readOnly />
      </div>

      <div>
        <input
          type="text"
          value={form.message}
          name="message"
          placeholder="message"
          onChange={handleChange}
        />
        <input type="text" value={form.message} readOnly />
      </div>

      <div>
        <button onClick={clear}>Clear</button>
      </div>
    </div>
  );
};

export default MyEvent3;
