import React from 'react';

// 파라미터의 구조 분해 할당
const MyCompo3 = ({ name, age, children }) => {
  // 변수의 구조 분해 할당
  // const { name, age, children } = props;

  return (
    <div>
      <h1>{name}</h1>
      <h2>{age}</h2>
      <div>{children}</div>
    </div>
  );
};

export default MyCompo3;
