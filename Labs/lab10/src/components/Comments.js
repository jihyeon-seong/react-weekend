export default function Comments({ comments }) {
  return (
    comments.length > 0 && (
      <section className="comments">
        <h3>Comments</h3>
        {comments.map((comment) => (
          <p key={comment.id} className="comment">
            <span className="comment-user-info">
              {comment.name}({comment.email})
            </span>
            <div className="comment-text">{comment.body}</div>
          </p>
        ))}
      </section>
    )
  );
}
