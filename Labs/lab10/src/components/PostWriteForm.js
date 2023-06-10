import { useState } from 'react';

// TODO
export default function PostWriteForm() {
  const [username, setUsername] = useState('Anonymous');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  return (
    <section className="post-write">
      <div className="write-form">
        <input type="text" value={username} placeholder="username" />
        <input type="text" value={title} placeholder="title" />
        <input type="text" value={content} placeholder="content" />
      </div>

      <button type="button" className="write-button">
        등록
      </button>
    </section>
  );
}
