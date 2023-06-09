import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchPostDetails } from '../slices/PostDetailsSlice';
import PostDetails from '../components/PostDetails';
import { fetchComments } from '../slices/Comments';
import Comment from '../components/Comment';

export default function PostDetailsPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { post, loading, hasError } = useSelector((state) => state.postDetails);
  const {
    comments,
    loading: commentsLoading,
    hasError: commentsHasError,
  } = useSelector((state) => state.comments);

  useEffect(() => {
    dispatch(fetchPostDetails(id));
    dispatch(fetchComments(id));
  }, [dispatch, id]);

  const renderPostDetatils = () => {
    if (loading) {
      return <h2>Loading...</h2>;
    }

    if (hasError) {
      return <h2>Error!</h2>;
    }

    return <PostDetails post={post} />;
  };

  const renderComments = () => {
    if (commentsLoading) {
      return <h2>Comments Loading...</h2>;
    }

    if (commentsHasError) {
      return <h2>Comments Error!</h2>;
    }

    return (
      comments.length > 0 && (
        <section className="comments">
          <h3>Comments</h3>
          {comments.map((comment) => (
            <Comment key={comment.id} comment={comment} />
          ))}
        </section>
      )
    );
  };

  return (
    <section>
      <h1>Post Details Page - {id}</h1>
      {renderPostDetatils()}
      {renderComments()}
    </section>
  );
}
