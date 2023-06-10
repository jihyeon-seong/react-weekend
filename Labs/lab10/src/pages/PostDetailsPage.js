import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchPostDetails } from '../slices/PostDetailsSlice';
import PostDetails from '../components/PostDetails';

export default function PostDetailsPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { post, loading, hasError } = useSelector((state) => state.postDetails);

  useEffect(() => {
    dispatch(fetchPostDetails(id));
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

  return (
    <section>
      <h1>Post Details Page - {id}</h1>
      {renderPostDetatils()}
    </section>
  );
}
