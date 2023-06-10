export default function Comments({ comments }) {
  return (
    <section className="comments">
      <h3>Comments</h3>
      {comments.map((comment, index) => (
        <p className="comment">
          <span className="comment-user-info">
            {comment.name}({comment.email})
          </span>
          <span>&nbsp;:&nbsp;</span>
          <div className="comment-text">{comment.body}</div>
        </p>
      ))}
    </section>
  );
}
