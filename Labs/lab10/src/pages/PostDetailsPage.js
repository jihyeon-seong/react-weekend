import { useParams } from 'react-router-dom';

export default function PostDetailsPage() {
  const { id } = useParams();

  return (
    <section>
      <h1>Post Details Page {id}</h1>
    </section>
  );
}
