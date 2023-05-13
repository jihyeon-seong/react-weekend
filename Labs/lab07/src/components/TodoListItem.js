import React from 'react';
import { MdCheckBoxOutlineBlank, MdRemoveCircleOutline } from 'react-icons/md';

// Todo Item

export default function TodoListItem() {
  return (
    <div>
      <div>
        <MdCheckBoxOutlineBlank />
        <div>할 일</div>
      </div>
      <div>
        <MdRemoveCircleOutline />
      </div>
    </div>
  );
}
