import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPostList } from '../slices/PostListSlice';

export default function PostListPage() {
  // 리덕스 스토어로 액션을 전달할 수 있는 dispatch 함수를 리턴
  const dispatch = useDispatch();

  // 리덕스 스토어가 관리하는 전역 state 객체들 중 컴포넌트에서 필요한 state를 선택
  const { posts, loading, hasError } = useSelector((state) => state.postList);

  useEffect(() => {
    dispatch(fetchPostList());
  }, [dispatch]);

  return (
    <section>
      <h1>Post List Page</h1>
      {posts.map((post, index) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </section>
  );
}
