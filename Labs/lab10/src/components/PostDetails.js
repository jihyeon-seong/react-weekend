import { Link } from 'react-router-dom';

export default function PostDetails({ post }) {
  return (
    <article>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <Link to="/posts">Go to List</Link>
    </article>
  );
}
