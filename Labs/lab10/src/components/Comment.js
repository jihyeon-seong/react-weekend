export default function Comment({ comment }) {
  const { id, name, email, body } = comment;

  return (
    <div key={id} className="comment">
      <span className="comment-user-info">
        {name}({email})
      </span>
      <p className="comment-text">{body}</p>
    </div>
  );
}
