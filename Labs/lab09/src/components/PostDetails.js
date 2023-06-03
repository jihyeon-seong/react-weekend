import { Link } from 'react-router-dom';

const PostDetails = ({ post }) => {
  return (
    <>
      <Link to="/posts">Go to List</Link>
      <article>
        <h2 key={post.id}>title : {post.title}</h2>
        <div>
          <div
            style={{
              backgroundImage: `url(${post.profileImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              border: '1px solid #eee',
              borderRadius: '100%',
              boxShadow: '2px 2px 10px rgba(7,7,7,.3)',
              width: 64,
              height: 64,
            }}
          ></div>
          <h3>username : {post.username}</h3>
        </div>
        <p style={{ padding: '2rem', backgroundColor: '#efefef' }}>
          content : {post.body}
        </p>
      </article>
    </>
  );
};

export default PostDetails;
