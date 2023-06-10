import { Link } from 'react-router-dom';

export default function PostItem({ post }) {
  return (
    <article>
      <h2>{post.title}</h2>
      <p>
        {post.body.length > 100 ? `${post.body.slice(0, 100)}...` : post.body}
      </p>
      <Link to={`/posts/${post.id}`}>More</Link>
    </article>
  );
}
