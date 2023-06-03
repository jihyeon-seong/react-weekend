import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { useEffect } from 'react';
import { fetchPosts } from '../actions/PostsActions';
import Post from '../components/Post';

const PostsPage = ({ dispatch, posts, loading, hasErrors }) => {
  // redux와 connect된 react component는 dispatch 함수를 props로 전달 받음
  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  // display loading, error, success
  const renderPosts = () => {
    if (loading) {
      return <p>Loading...</p>;
    }

    if (hasErrors) {
      return <p>Error...</p>;
    }

    return posts.map((post) => <Post key={post.id} post={post} />);
  };

  return (
    <div>
      <h1>Posts Page</h1>
      <p>This is Posts Page</p>
      <Link to="/">Go to Dashboard</Link>
      {renderPosts()}
    </div>
  );
};

// redux store가 관리하는 state를 전달 받아서 페이지 컴포넌트의 props로 전달될 객체를 리턴
const mapStateToProps = (state) => ({
  posts: state.posts.posts,
  loading: state.posts.loading,
  hasError: state.posts.hasError,
});

// redux react 연결
export default connect(mapStateToProps)(PostsPage);
