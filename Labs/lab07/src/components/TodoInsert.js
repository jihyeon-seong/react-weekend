import React from 'react';
import { MdAdd } from 'react-icons/md';
import './TodoInsert.scss';

// 새 할일을 추가하는 컴포넌트. input의 값을 state로 관리

export default function TodoInsert() {
  return (
    <form className="TodoInsert">
      <input type="text" placeholder="할 일 입력" />
      <button type="submit">
        <MdAdd />
      </button>
    </form>
  );
}
