import { useEffect } from 'react';
import { fetchPostDetails } from '../actions/PostDetailsActions';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import PostDetails from '../components/PostDetails';

const PostDetailsPage = ({ dispatch, post, loading, hasErrors }) => {
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchPostDetails(id));
  }, [id, dispatch]);

  const renderPost = () => {
    if (loading) {
      return <p>[Post Details] Loading...</p>;
    }

    if (hasErrors) {
      return <p>[Post Details] Error...</p>;
    }

    return <PostDetails post={post} />;
  };

  return (
    <div>
      <h1>Post Details Page</h1>
      {renderPost()}
    </div>
  );
};

const mapStateToProps = (state) => ({
  post: state.postDetails.post,
  loading: state.postDetails.loading,
  hasError: state.postDetails.hasError,
});

export default connect(mapStateToProps)(PostDetailsPage);
