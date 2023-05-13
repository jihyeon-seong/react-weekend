import { useCallback, useState } from 'react';
import { MdAdd } from 'react-icons/md';
import '../resources/scss/TodoInsert.scss';

export default function TodoInsert({ onInsert }) {
  const [value, setValue] = useState('');

  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();

      if (value !== '') {
        onInsert(value);
        setValue('');
      }
    },
    [onInsert, value],
  );

  return (
    <form className="TodoInsert" onSubmit={onSubmit}>
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder="할 일 입력"
      />
      <button type="submit">
        <MdAdd />
      </button>
    </form>
  );
}
