import { Link } from 'react-router-dom';

const Post = ({ post }) => {
  return (
    <article>
      <Link to={`${post.id}`}>
        <h2 key={post.id}>title : {post.title}</h2>
      </Link>
      <hr />
    </article>
  );
};

export default Post;
