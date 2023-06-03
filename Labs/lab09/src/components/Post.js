const Post = ({ post }) => {
  const username = [
    'jay',
    'mark',
    'tony',
    'alice',
    'mina',
    'grace',
    'niki',
    'anna',
    'cherry',
    'helen',
  ];
  return (
    <article>
      <hr />
      <h2 key={post.id}>title : {post.title}</h2>
      <h3>username : {username[post.userId - 1]}</h3>
      <p>{post.body}</p>
      <hr />
    </article>
  );
};

export default Post;
