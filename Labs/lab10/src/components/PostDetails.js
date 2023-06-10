import { Link } from 'react-router-dom';

export default function PostDetails({ post }) {
  const { id, title, body, username, email } = post;

  return (
    id && (
      <article className="post-details">
        <h2>{title}</h2>
        <p>{body}</p>
        <address>
          <span>{username}</span>
          <span>{email}</span>
        </address>
        <Link to="/posts">Go to List</Link>
      </article>
    )
  );
}
